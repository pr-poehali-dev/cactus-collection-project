import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const FeedbackTab = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState<number>(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedbackType || !message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive",
      });
      return;
    }

    // Симуляция отправки
    toast({
      title: "Спасибо за отзыв!",
      description: "Ваше сообщение получено и будет рассмотрено",
    });

    // Очистка формы
    setName('');
    setEmail('');
    setFeedbackType('');
    setMessage('');
    setRating(0);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setRating(i + 1)}
        className={`text-2xl transition-colors ${
          i < rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-200'
        }`}
      >
        ★
      </button>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Заголовок */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-desert-green mb-4">
          Ваше мнение важно для нас
        </h2>
        <p className="text-gray-600">
          Помогите нам сделать энциклопедию кактусов еще лучше! 
          Оставьте отзыв о сайте или предложение по его улучшению.
        </p>
      </div>

      {/* Форма обратной связи */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="MessageSquare" size={24} />
            Форма обратной связи
          </CardTitle>
          <CardDescription>
            Заполните форму ниже, чтобы поделиться своими мыслями
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя (необязательно)</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите ваше имя"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email (необязательно)</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedbackType">Тип обращения *</Label>
              <Select onValueChange={setFeedbackType} value={feedbackType}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип обращения" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="feedback">Отзыв о сайте</SelectItem>
                  <SelectItem value="suggestion">Предложение по улучшению</SelectItem>
                  <SelectItem value="error">Сообщение об ошибке</SelectItem>
                  <SelectItem value="content">Предложение нового контента</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {feedbackType === 'feedback' && (
              <div className="space-y-2">
                <Label>Оценка сайта</Label>
                <div className="flex items-center gap-2">
                  {renderStars()}
                  {rating > 0 && (
                    <span className="ml-2 text-sm text-gray-600">
                      {rating} из 5
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">
                {feedbackType === 'feedback' ? 'Ваш отзыв' : 'Ваше сообщение'} *
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  feedbackType === 'feedback' 
                    ? "Поделитесь впечатлениями о сайте..." 
                    : feedbackType === 'suggestion'
                    ? "Опишите ваше предложение..."
                    : "Опишите ваше сообщение..."
                }
                rows={6}
                className="resize-none"
              />
            </div>

            <Button type="submit" className="w-full bg-desert-green hover:bg-desert-green/90">
              <Icon name="Send" size={16} className="mr-2" />
              Отправить сообщение
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Дополнительная информация */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Icon name="Users" size={40} className="mx-auto mb-4 text-desert-green" />
            <h3 className="font-semibold mb-2">Сообщество</h3>
            <p className="text-sm text-gray-600">
              Присоединяйтесь к нашему сообществу любителей кактусов
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Icon name="Lightbulb" size={40} className="mx-auto mb-4 text-desert-green" />
            <h3 className="font-semibold mb-2">Ваши идеи</h3>
            <p className="text-sm text-gray-600">
              Каждое предложение помогает нам стать лучше
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Icon name="Heart" size={40} className="mx-auto mb-4 text-desert-green" />
            <h3 className="font-semibold mb-2">Благодарность</h3>
            <p className="text-sm text-gray-600">
              Спасибо за ваш интерес к миру кактусов!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeedbackTab;
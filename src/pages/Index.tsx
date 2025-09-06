import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface CactusSpecies {
  id: string;
  name: string;
  scientificName: string;
  family: string;
  description: string;
  origin: string;
  care: {
    watering: string;
    light: string;
    temperature: string;
    soil: string;
  };
  image: string;
  blooming: string;
  size: string;
  difficulty: 'Легкий' | 'Средний' | 'Сложный';
}

const cactusData: CactusSpecies[] = [
  {
    id: '1',
    name: 'Сагуаро',
    scientificName: 'Carnegiea gigantea',
    family: 'Cactaceae',
    description: 'Величественный гигант пустыни Сонора, символ американского Юго-Запада. Может достигать высоты до 12 метров и жить более 150 лет.',
    origin: 'Пустыня Сонора, США и Мексика',
    care: {
      watering: 'Редкий полив раз в 2-3 недели летом',
      light: 'Яркий прямой солнечный свет',
      temperature: '18-35°C, минимум 10°C зимой',
      soil: 'Хорошо дренированная кактусовая смесь'
    },
    image: '/img/5785449a-ab71-44ac-a472-c37c9bcb887b.jpg',
    blooming: 'Май-июнь, белые цветы',
    size: 'До 12 м в высоту',
    difficulty: 'Средний'
  },
  {
    id: '2',
    name: 'Бочковый кактус',
    scientificName: 'Ferocactus cylindraceus',
    family: 'Cactaceae',
    description: 'Округлый кактус с мощными колючками и яркими цветами. Отличный накопитель воды, способен выживать в экстремальных условиях.',
    origin: 'Пустыни Мохаве и Сонора',
    care: {
      watering: 'Умеренный полив раз в 3-4 недели',
      light: 'Яркое освещение, переносит полутень',
      temperature: '15-30°C, устойчив к заморозкам',
      soil: 'Песчано-гравийная смесь'
    },
    image: '/img/50ad3ef9-6be6-420a-87a5-cacb1a368e35.jpg',
    blooming: 'Июль-сентябрь, желтые цветы',
    size: '1-3 м в высоту',
    difficulty: 'Легкий'
  },
  {
    id: '3',
    name: 'Опунция',
    scientificName: 'Opuntia ficus-indica',
    family: 'Cactaceae',
    description: 'Плоский кактус с съедобными плодами, широко культивируется в Средиземноморье. Один из самых адаптивных видов кактусов.',
    origin: 'Мексика, натурализована по всему миру',
    care: {
      watering: 'Регулярный полив весной и летом',
      light: 'Полное солнце или легкая полутень',
      temperature: '5-40°C, морозостойкая',
      soil: 'Любая хорошо дренированная почва'
    },
    image: '/img/e130d63b-e4ce-4afd-9c7e-344ec4d335a5.jpg',
    blooming: 'Июнь-август, желтые цветы',
    size: '2-5 м в высоту',
    difficulty: 'Легкий'
  },
  {
    id: '4',
    name: 'Рождественский кактус',
    scientificName: 'Schlumbergera truncata',
    family: 'Cactaceae',
    description: 'Эпифитный кактус-суккulent из тропических лесов Бразилии. Популярное комнатное растение, цветущее зимой яркими цветами.',
    origin: 'Атлантические леса Бразилии',
    care: {
      watering: 'Регулярный полив, не допускать пересыхания',
      light: 'Яркий рассеянный свет, избегать прямого солнца',
      temperature: '15-21°C, прохладный период для цветения',
      soil: 'Рыхлая, хорошо дренированная почва для эпифитов'
    },
    image: '/img/a13fce8a-f444-49f3-a129-50dac170c908.jpg',
    blooming: 'Ноябрь-январь, розовые, красные цветы',
    size: '30-60 см в диаметре',
    difficulty: 'Легкий'
  },
  {
    id: '5',
    name: 'Органная труба',
    scientificName: 'Stenocereus thurberi',
    family: 'Cactaceae',
    description: 'Величественный колонновидный кактус с множественными стволами. Получил название из-за сходства с органными трубами.',
    origin: 'Пустыня Сонора, Мексика и Аризона',
    care: {
      watering: 'Минимальный полив раз в месяц',
      light: 'Полное солнце, очень светолюбив',
      temperature: '20-40°C, не переносит заморозки',
      soil: 'Каменистая, хорошо дренированная почва'
    },
    image: '/img/990602a5-090a-41df-aad7-7caf177eeb7d.jpg',
    blooming: 'Апрель-июнь, белые или розовые цветы',
    size: '6-8 м в высоту',
    difficulty: 'Сложный'
  },
  {
    id: '6',
    name: 'Старик',
    scientificName: 'Cephalocereus senilis',
    family: 'Cactaceae',
    description: 'Уникальный кактус, покрытый длинными белыми волосками, защищающими от солнца и холода. Символ мексиканской флоры.',
    origin: 'Центральная Мексика, штат Идальго',
    care: {
      watering: 'Очень редкий полив раз в 4-6 недель',
      light: 'Яркое солнце, переносит полутень',
      temperature: '18-30°C, минимум 5°C',
      soil: 'Известковая, щелочная почва с отличным дренажем'
    },
    image: '/img/30c6f9ec-da18-4a41-bdaa-0706f77379d6.jpg',
    blooming: 'Редко цветет в культуре, розовые цветы',
    size: '12-15 м в природе, до 2 м дома',
    difficulty: 'Средний'
  },
  {
    id: '7',
    name: 'Золотая бочка',
    scientificName: 'Echinocactus grusonii',
    family: 'Cactaceae',
    description: 'Сферический кактус с золотистыми колючками. Один из самых популярных декоративных кактусов, символ мексиканских пустынь.',
    origin: 'Центральная Мексика',
    care: {
      watering: 'Редкий полив раз в 3-4 недели летом',
      light: 'Яркий прямой солнечный свет',
      temperature: '20-35°C, минимум 8°C',
      soil: 'Песчаная кактусовая смесь с добавлением перлита'
    },
    image: '/img/dbba7852-b254-44ac-be1b-7d8661608c56.jpg',
    blooming: 'Июнь-сентябрь, желтые цветы на верхушке',
    size: 'До 1,3 м в диаметре',
    difficulty: 'Легкий'
  },
  {
    id: '8',
    name: 'Царица ночи',
    scientificName: 'Epiphyllum oxypetalum',
    family: 'Cactaceae',
    description: 'Эпифитный кактус с огромными ароматными цветами, раскрывающимися только ночью. Одно из самых эффектных цветений в мире кактусов.',
    origin: 'Тропические леса Центральной Америки',
    care: {
      watering: 'Обильный полив в период роста, зимой сократить',
      light: 'Яркий рассеянный свет, избегать прямого солнца',
      temperature: '18-24°C, повышенная влажность',
      soil: 'Рыхлая эпифитная смесь с корой и мхом'
    },
    image: '/img/f9bef502-4863-4bfd-83c7-77ad0573b8ef.jpg',
    blooming: 'Лето, огромные белые цветы ночью',
    size: '2-3 м в длину плетей',
    difficulty: 'Средний'
  },
  {
    id: '9',
    name: 'Епископская шапка',
    scientificName: 'Astrophytum myriostigma',
    family: 'Cactaceae',
    description: 'Звездообразный кактус без колючек с характерными белыми пятнами. Форма напоминает епископскую митру, отсюда и название.',
    origin: 'Северо-восточная Мексика',
    care: {
      watering: 'Очень осторожный полив раз в 3-4 недели',
      light: 'Яркое солнце, но защищать от полуденного зноя',
      temperature: '22-28°C, зимой 10-15°C',
      soil: 'Минеральная смесь с большим содержанием песка'
    },
    image: '/img/943b2e6b-c3aa-4056-baaf-debce8636624.jpg',
    blooming: 'Лето, желтые цветы на верхушке',
    size: '15-20 см в диаметре',
    difficulty: 'Сложный'
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<CactusSpecies | null>(null);
  
  const filteredCacti = cactusData.filter(cactus =>
    cactus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cactus.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легкий': return 'bg-green-100 text-green-800';
      case 'Средний': return 'bg-yellow-100 text-yellow-800';
      case 'Сложный': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-desert-cream via-white to-desert-sand">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                🌵 Энциклопедия Кактусов
              </h1>
              <p className="text-desert-stone text-lg">Научный каталог суккулентов и их разновидностей</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-primary border-primary">
                <Icon name="Database" size={16} className="mr-1" />
                {cactusData.length} видов
              </Badge>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Button variant="ghost" className="text-primary hover:bg-primary/10">
              <Icon name="Home" size={16} className="mr-2" />
              Каталог
            </Button>
            <Button variant="ghost" className="text-primary hover:bg-primary/10">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
            <Button variant="ghost" className="text-primary hover:bg-primary/10">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Энциклопедия
            </Button>
            <Button variant="ghost" className="text-primary hover:bg-primary/10">
              <Icon name="Sprout" size={16} className="mr-2" />
              Уход
            </Button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Поиск по названию или латинскому имени..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-2 border-desert-sage/30 focus:border-primary rounded-full"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-desert-stone">
              ✨ <strong>Определитель кактусов с ИИ</strong> - скоро доступен для распознавания видов по фото
            </p>
          </div>
        </div>

        {/* Species Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCacti.map((cactus) => (
            <Card 
              key={cactus.id} 
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:scale-105 cursor-pointer"
              onClick={() => setSelectedSpecies(cactus)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={cactus.image} 
                  alt={cactus.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={getDifficultyColor(cactus.difficulty)}>
                    {cactus.difficulty}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-primary text-xl mb-1">
                  {cactus.name}
                </CardTitle>
                <p className="text-sm text-desert-stone italic">
                  {cactus.scientificName}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {cactus.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-desert-stone">
                  <span className="flex items-center">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {cactus.origin.split(',')[0]}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Ruler" size={14} className="mr-1" />
                    {cactus.size}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed View Modal */}
        {selectedSpecies && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
                  onClick={() => setSelectedSpecies(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
                
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div>
                    <img
                      src={selectedSpecies.image}
                      alt={selectedSpecies.name}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <div className="mb-4">
                      <h2 className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                        {selectedSpecies.name}
                      </h2>
                      <p className="text-lg text-desert-stone italic mb-2">
                        {selectedSpecies.scientificName}
                      </p>
                      <Badge className={getDifficultyColor(selectedSpecies.difficulty)}>
                        Уровень ухода: {selectedSpecies.difficulty}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {selectedSpecies.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Icon name="Globe" size={16} className="mr-2 text-primary" />
                        <div>
                          <p className="font-semibold">Происхождение</p>
                          <p className="text-gray-600">{selectedSpecies.origin}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Flower" size={16} className="mr-2 text-primary" />
                        <div>
                          <p className="font-semibold">Цветение</p>
                          <p className="text-gray-600">{selectedSpecies.blooming}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <Tabs defaultValue="care" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="care">Уход</TabsTrigger>
                      <TabsTrigger value="info">Информация</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="care" className="mt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Icon name="Droplets" size={20} className="mr-2 text-blue-500" />
                              Полив
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">{selectedSpecies.care.watering}</p>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Icon name="Sun" size={20} className="mr-2 text-yellow-500" />
                              Освещение
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">{selectedSpecies.care.light}</p>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Icon name="Thermometer" size={20} className="mr-2 text-red-500" />
                              Температура
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">{selectedSpecies.care.temperature}</p>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Icon name="Mountain" size={20} className="mr-2 text-amber-600" />
                              Почва
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">{selectedSpecies.care.soil}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="info" className="mt-4">
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                          <Card>
                            <CardContent className="pt-4">
                              <Icon name="Ruler" size={24} className="mx-auto mb-2 text-primary" />
                              <p className="font-semibold">Размер</p>
                              <p className="text-sm text-gray-600">{selectedSpecies.size}</p>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardContent className="pt-4">
                              <Icon name="TreePine" size={24} className="mx-auto mb-2 text-primary" />
                              <p className="font-semibold">Семейство</p>
                              <p className="text-sm text-gray-600">{selectedSpecies.family}</p>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardContent className="pt-4">
                              <Icon name="Calendar" size={24} className="mx-auto mb-2 text-primary" />
                              <p className="font-semibold">Цветение</p>
                              <p className="text-sm text-gray-600">{selectedSpecies.blooming}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">🌵 Энциклопедия Кактусов</h3>
            <p className="text-primary-foreground/80">
              Научный подход к изучению суккулентов и кактусов
            </p>
            <div className="flex justify-center items-center mt-4 space-x-6 text-sm">
              <span className="flex items-center">
                <Icon name="Database" size={16} className="mr-1" />
                {cactusData.length} видов в каталоге
              </span>
              <span className="flex items-center">
                <Icon name="Camera" size={16} className="mr-1" />
                ИИ-определитель скоро
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
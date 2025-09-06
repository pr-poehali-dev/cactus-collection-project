import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

interface CactusModalProps {
  species: CactusSpecies | null;
  onClose: () => void;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Легкий': return 'bg-green-100 text-green-800';
    case 'Средний': return 'bg-yellow-100 text-yellow-800';
    case 'Сложный': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const CactusModal = ({ species, onClose }: CactusModalProps) => {
  if (!species) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
            onClick={onClose}
          >
            <Icon name="X" size={20} />
          </Button>
          
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div>
              <img
                src={species.image}
                alt={species.name}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            
            <div>
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                  {species.name}
                </h2>
                <p className="text-lg text-desert-stone italic mb-2">
                  {species.scientificName}
                </p>
                <Badge className={getDifficultyColor(species.difficulty)}>
                  Уровень ухода: {species.difficulty}
                </Badge>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {species.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Icon name="Globe" size={16} className="mr-2 text-primary" />
                  <div>
                    <p className="font-semibold">Происхождение</p>
                    <p className="text-gray-600">{species.origin}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Flower" size={16} className="mr-2 text-primary" />
                  <div>
                    <p className="font-semibold">Цветение</p>
                    <p className="text-gray-600">{species.blooming}</p>
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
                      <p className="text-sm text-gray-600">{species.care.watering}</p>
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
                      <p className="text-sm text-gray-600">{species.care.light}</p>
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
                      <p className="text-sm text-gray-600">{species.care.temperature}</p>
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
                      <p className="text-sm text-gray-600">{species.care.soil}</p>
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
                        <p className="text-sm text-gray-600">{species.size}</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-4">
                        <Icon name="TreePine" size={24} className="mx-auto mb-2 text-primary" />
                        <p className="font-semibold">Семейство</p>
                        <p className="text-sm text-gray-600">{species.family}</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-4">
                        <Icon name="Calendar" size={24} className="mx-auto mb-2 text-primary" />
                        <p className="font-semibold">Цветение</p>
                        <p className="text-sm text-gray-600">{species.blooming}</p>
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
  );
};

export default CactusModal;
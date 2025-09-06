import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

interface CactusCardProps {
  cactus: CactusSpecies;
  onClick: (cactus: CactusSpecies) => void;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Легкий': return 'bg-green-100 text-green-800';
    case 'Средний': return 'bg-yellow-100 text-yellow-800';
    case 'Сложный': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const CactusCard = ({ cactus, onClick }: CactusCardProps) => {
  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:scale-105 cursor-pointer"
      onClick={() => onClick(cactus)}
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
  );
};

export default CactusCard;
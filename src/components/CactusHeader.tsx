import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface CactusHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  totalSpecies: number;
  showSearch?: boolean;
}

const CactusHeader = ({ searchTerm, onSearchChange, totalSpecies, showSearch = true }: CactusHeaderProps) => {
  return (
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
              {totalSpecies} видов
            </Badge>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center space-x-6 mb-8">
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

        {/* Search Section */}
        {showSearch && (
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск по названию или латинскому имени..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border-2 border-desert-sage/30 focus:border-primary rounded-full"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-desert-stone">
                ✨ <strong>Определитель кактусов с ИИ</strong> - скоро доступен для распознавания видов по фото
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default CactusHeader;
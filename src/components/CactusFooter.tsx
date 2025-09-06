import Icon from '@/components/ui/icon';

interface CactusFooterProps {
  totalSpecies: number;
}

const CactusFooter = ({ totalSpecies }: CactusFooterProps) => {
  return (
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
              {totalSpecies} видов в каталоге
            </span>
            <span className="flex items-center">
              <Icon name="Camera" size={16} className="mr-1" />
              ИИ-определитель скоро
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CactusFooter;
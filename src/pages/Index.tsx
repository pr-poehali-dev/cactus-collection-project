import { useState } from 'react';
import CactusHeader from '@/components/CactusHeader';
import CactusCard from '@/components/CactusCard';
import CactusModal from '@/components/CactusModal';
import CactusFooter from '@/components/CactusFooter';
import { cactusData, type CactusSpecies } from '@/data/cactusData';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<CactusSpecies | null>(null);
  
  const filteredCacti = cactusData.filter(cactus =>
    cactus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cactus.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSpeciesSelect = (species: CactusSpecies) => {
    setSelectedSpecies(species);
  };

  const handleCloseModal = () => {
    setSelectedSpecies(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-desert-cream via-white to-desert-sand">
      <CactusHeader 
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        totalSpecies={cactusData.length}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Species Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCacti.map((cactus) => (
            <CactusCard 
              key={cactus.id}
              cactus={cactus}
              onClick={handleSpeciesSelect}
            />
          ))}
        </div>

        {/* Modal */}
        <CactusModal 
          species={selectedSpecies}
          onClose={handleCloseModal}
        />
      </main>

      <CactusFooter totalSpecies={cactusData.length} />
    </div>
  );
};

export default Index;
import { useState } from 'react';
import CactusHeader from '@/components/CactusHeader';
import CactusCard from '@/components/CactusCard';
import CactusModal from '@/components/CactusModal';
import CactusFooter from '@/components/CactusFooter';
import TabNavigation from '@/components/TabNavigation';
import FeedbackTab from '@/components/FeedbackTab';
import { cactusData, type CactusSpecies } from '@/data/cactusData';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<CactusSpecies | null>(null);
  const [activeTab, setActiveTab] = useState('catalog');
  
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

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-desert-cream via-white to-desert-sand">
      <CactusHeader 
        searchTerm={activeTab === 'catalog' ? searchTerm : ''}
        onSearchChange={handleSearchChange}
        totalSpecies={cactusData.length}
        showSearch={activeTab === 'catalog'}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Tab Content */}
        {activeTab === 'catalog' ? (
          <>
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
          </>
        ) : (
          <FeedbackTab />
        )}
      </main>

      <CactusFooter totalSpecies={cactusData.length} />
    </div>
  );
};

export default Index;
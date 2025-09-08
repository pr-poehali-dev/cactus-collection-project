import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface TabNavigationProps {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

const TabNavigation = ({ onTabChange, activeTab }: TabNavigationProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onTabChange('catalog')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeTab === 'catalog'
            ? 'bg-desert-green text-white'
            : 'text-gray-600 hover:text-desert-green'
        }`}
      >
        <Icon name="Grid3X3" size={20} className="inline mr-2" />
        Каталог
      </button>
      <button
        onClick={() => onTabChange('feedback')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeTab === 'feedback'
            ? 'bg-desert-green text-white'
            : 'text-gray-600 hover:text-desert-green'
        }`}
      >
        <Icon name="MessageSquare" size={20} className="inline mr-2" />
        Отзывы и предложения
      </button>
    </div>
  );
};

export default TabNavigation;
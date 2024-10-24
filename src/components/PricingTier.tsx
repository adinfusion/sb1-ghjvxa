import React, { ReactNode } from 'react';

interface PricingTierProps {
  icon: ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

function PricingTier({ icon, title, description, isSelected, onClick }: PricingTierProps) {
  return (
    <div 
      className={`
        rounded-xl p-8 text-center transition-all cursor-pointer
        ${isSelected 
          ? 'bg-white shadow-lg ring-2 ring-blue-500 scale-105' 
          : 'bg-white/80 shadow hover:shadow-md hover:scale-102'}
      `}
      onClick={onClick}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default PricingTier;
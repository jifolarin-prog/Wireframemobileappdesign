import { ReactNode } from 'react';
import { useLowEnergy } from '../contexts/LowEnergyContext';

interface CardLargeProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
}

export function CardLarge({ icon, title, subtitle, onClick }: CardLargeProps) {
  const { isLowEnergy } = useLowEnergy();
  
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-start justify-start p-4 bg-white border border-[#D9D9D9] rounded-2xl text-left ${isLowEnergy ? 'h-36' : 'h-30'}`}
    >
      {icon && (
        <div className="w-8 h-8 bg-[#D9D9D9] mb-3" />
      )}
      <h3 className={`font-bold text-[#000000] ${isLowEnergy ? 'text-lg' : 'text-base'}`}>
        {title}
      </h3>
      {subtitle && (
        <p className={`text-[#999999] mt-1 ${isLowEnergy ? 'text-sm' : 'text-xs'}`}>
          {subtitle}
        </p>
      )}
    </button>
  );
}

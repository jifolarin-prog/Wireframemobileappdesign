import { ReactNode } from 'react';
import { useLowEnergy } from '../contexts/LowEnergyContext';

interface ToggleRowProps {
  icon?: ReactNode;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function ToggleRow({ icon, label, checked, onChange }: ToggleRowProps) {
  const { isLowEnergy } = useLowEnergy();
  
  return (
    <div className={`flex items-center justify-between ${isLowEnergy ? 'h-12' : 'h-10'}`}>
      <div className="flex items-center gap-3">
        {icon && !isLowEnergy && (
          <div className="w-5 h-5 bg-[#D9D9D9]" />
        )}
        <span className={`text-[#333333] ${isLowEnergy ? 'text-base' : 'text-sm'}`}>
          {label}
        </span>
      </div>
      
      <button
        onClick={onChange}
        className="relative w-9 h-5 rounded-full transition-colors"
        style={{ backgroundColor: checked ? '#333333' : '#D9D9D9' }}
      >
        <div 
          className="absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform"
          style={{ 
            transform: checked ? 'translateX(20px)' : 'translateX(2px)'
          }}
        />
      </button>
    </div>
  );
}

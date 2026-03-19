import { useLowEnergy } from '../contexts/LowEnergyContext';

interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  const { isLowEnergy } = useLowEnergy();
  
  return (
    <button
      onClick={onClick}
      className={`px-3 h-8 rounded-2xl border whitespace-nowrap ${isLowEnergy ? 'text-sm' : 'text-xs'}`}
      style={{
        backgroundColor: active ? '#333333' : 'white',
        borderColor: '#D9D9D9',
        color: active ? 'white' : '#333333'
      }}
    >
      {label}
    </button>
  );
}

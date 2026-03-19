import { useLowEnergy } from '../contexts/LowEnergyContext';

interface TagChipProps {
  label: string;
}

export function TagChip({ label }: TagChipProps) {
  const { isLowEnergy } = useLowEnergy();
  
  return (
    <span
      className={`inline-flex px-2 py-1 bg-[#F5F5F5] border border-[#D9D9D9] rounded text-[#333333] ${isLowEnergy ? 'text-sm' : 'text-xs'}`}
    >
      {label}
    </span>
  );
}

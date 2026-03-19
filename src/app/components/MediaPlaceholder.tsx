import { useLowEnergy } from '../contexts/LowEnergyContext';

interface MediaPlaceholderProps {
  height?: number;
  label?: string;
}

export function MediaPlaceholder({ height = 200, label }: MediaPlaceholderProps) {
  const { isLowEnergy } = useLowEnergy();
  
  return (
    <div
      className="w-full bg-[#D9D9D9] flex items-center justify-center"
      style={{ height: isLowEnergy ? `${height + 40}px` : `${height}px` }}
    >
      {label && (
        <span className={`text-[#999999] ${isLowEnergy ? 'text-base' : 'text-sm'}`}>
          {label}
        </span>
      )}
    </div>
  );
}

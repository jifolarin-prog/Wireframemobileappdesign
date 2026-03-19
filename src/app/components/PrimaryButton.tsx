import { useLowEnergy } from '../contexts/LowEnergyContext';

interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function PrimaryButton({ label, onClick, variant = 'primary' }: PrimaryButtonProps) {
  const { isLowEnergy } = useLowEnergy();
  
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl font-medium ${isLowEnergy ? 'h-14 text-base' : 'h-12 text-sm'}`}
      style={{
        backgroundColor: variant === 'primary' ? '#333333' : 'white',
        color: variant === 'primary' ? 'white' : '#333333',
        border: variant === 'secondary' ? '1px solid #D9D9D9' : 'none'
      }}
    >
      {label}
    </button>
  );
}

import { useLowEnergy } from '../contexts/LowEnergyContext';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  multiline?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export function InputField({ label, placeholder, multiline, value, onChange }: InputFieldProps) {
  const { isLowEnergy } = useLowEnergy();
  
  const baseClasses = `w-full bg-transparent border-b border-[#D9D9D9] pb-2 outline-none text-[#333333] ${isLowEnergy ? 'text-base min-h-12' : 'text-sm min-h-10'}`;
  
  return (
    <div className="flex flex-col gap-2">
      <label className={`text-[#999999] ${isLowEnergy ? 'text-sm' : 'text-xs'}`}>
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className={`${baseClasses} resize-none`}
          rows={4}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
    </div>
  );
}

import { Search, Mic } from 'lucide-react';
import { useLowEnergy } from '../contexts/LowEnergyContext';

export function SearchBar() {
  const { isLowEnergy } = useLowEnergy();
  
  return (
    <div 
      className={`flex items-center gap-3 bg-white border border-[#D9D9D9] rounded-xl px-4 ${isLowEnergy ? 'h-14' : 'h-12'}`}
    >
      <div className="w-6 h-6 rounded-full bg-[#D9D9D9] flex items-center justify-center flex-shrink-0">
        <Search className="w-4 h-4 text-[#333333]" />
      </div>
      <span className={`flex-1 text-[#999999] ${isLowEnergy ? 'text-base' : 'text-sm'}`}>
        Search or use voice
      </span>
      {!isLowEnergy && (
        <div className="w-6 h-6 rounded-full bg-[#D9D9D9] flex items-center justify-center flex-shrink-0">
          <Mic className="w-4 h-4 text-[#333333]" />
        </div>
      )}
    </div>
  );
}

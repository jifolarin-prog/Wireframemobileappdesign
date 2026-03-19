import { ReactNode } from 'react';
import { Bookmark } from 'lucide-react';
import { useLowEnergy } from '../contexts/LowEnergyContext';

interface CardListProps {
  title: string;
  summary: string;
  formatIcons?: ReactNode[];
  onBookmark?: () => void;
  onClick?: () => void;
}

export function CardList({ title, summary, formatIcons, onBookmark, onClick }: CardListProps) {
  const { isLowEnergy } = useLowEnergy();
  
  return (
    <div
      onClick={onClick}
      className={`flex flex-col p-3 bg-white border border-[#D9D9D9] rounded-2xl cursor-pointer ${isLowEnergy ? 'min-h-28' : 'h-25'}`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className={`font-bold text-[#000000] flex-1 ${isLowEnergy ? 'text-lg' : 'text-base'}`}>
          {title}
        </h3>
        {!isLowEnergy && formatIcons && (
          <div className="flex items-center gap-1">
            {formatIcons.map((icon, index) => (
              <div key={index} className="w-4 h-4 bg-[#D9D9D9]">
                {icon}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <p className={`text-[#999999] flex-1 line-clamp-2 ${isLowEnergy ? 'text-base' : 'text-sm'}`}>
        {summary}
      </p>
      
      {!isLowEnergy && (
        <div className="flex justify-end mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookmark?.();
            }}
            className="w-5 h-5"
          >
            <Bookmark className="w-5 h-5 text-[#333333]" />
          </button>
        </div>
      )}
    </div>
  );
}

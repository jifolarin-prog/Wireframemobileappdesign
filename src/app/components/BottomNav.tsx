import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { useLowEnergy } from '../contexts/LowEnergyContext';

interface NavItem {
  icon: ReactNode;
  label: string;
  path: string;
}

interface BottomNavProps {
  items: NavItem[];
}

export function BottomNav({ items }: BottomNavProps) {
  const location = useLocation();
  const { isLowEnergy } = useLowEnergy();
  
  return (
    <div className="h-18 bg-white border-t border-[#D9D9D9] flex items-center justify-around px-4">
      {items.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center gap-1 py-2"
          >
            <div className={`w-6 h-6 bg-[#D9D9D9] flex items-center justify-center ${isActive ? 'opacity-100' : 'opacity-50'}`}>
              {item.icon}
            </div>
            <span 
              className={`text-xs ${isActive ? 'text-[#000000]' : 'text-[#999999]'}`}
              style={{ fontSize: isLowEnergy ? '14px' : '12px' }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

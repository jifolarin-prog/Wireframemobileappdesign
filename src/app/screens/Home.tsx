import { useNavigate } from 'react-router';
import { SearchBar } from '../components/SearchBar';
import { ToggleRow } from '../components/ToggleRow';
import { CardLarge } from '../components/CardLarge';
import { BottomNav } from '../components/BottomNav';
import { Home as HomeIcon, PlusCircle, Users, User } from 'lucide-react';
import { useLowEnergy } from '../contexts/LowEnergyContext';

export function Home() {
  const navigate = useNavigate();
  const { isLowEnergy, toggleLowEnergy } = useLowEnergy();

  const cards = [
    { title: 'Browse by Challenge', subtitle: '', path: '/browse' },
    { title: 'Tool Library', subtitle: '' },
    { title: 'Recent Tips', subtitle: '' },
    { title: 'Support Circles', subtitle: '' },
  ];

  const navItems = [
    { icon: <HomeIcon className="w-4 h-4" />, label: 'Home', path: '/' },
    { icon: <PlusCircle className="w-4 h-4" />, label: 'Post', path: '/create' },
    { icon: <Users className="w-4 h-4" />, label: 'Community', path: '/browse' },
    { icon: <User className="w-4 h-4" />, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5]">
      <div className="flex-1 overflow-y-auto">
        <div className={`p-4 flex flex-col ${isLowEnergy ? 'gap-6' : 'gap-4'}`}>
          <SearchBar />
          
          <ToggleRow
            label="Low Energy Mode"
            checked={isLowEnergy}
            onChange={toggleLowEnergy}
          />

          <div className={`${isLowEnergy ? 'flex flex-col gap-3' : 'grid grid-cols-2 gap-3'}`}>
            {cards.map((card, index) => (
              <CardLarge
                key={index}
                icon={true}
                title={card.title}
                subtitle={card.subtitle}
                onClick={card.path ? () => navigate(card.path) : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNav items={navItems} />
    </div>
  );
}

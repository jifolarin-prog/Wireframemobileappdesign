import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FilterChip } from '../components/FilterChip';
import { CardList } from '../components/CardList';
import { BottomNav } from '../components/BottomNav';
import { Home, PlusCircle, Users, User, Video, Mic, FileText } from 'lucide-react';
import { useLowEnergy } from '../contexts/LowEnergyContext';

const filters = ['Mobility', 'Vision', 'Chronic Pain', 'Neurodivergent', 'Low Energy'];

const tips = [
  {
    id: 1,
    title: 'Voice Control for Hands-Free Tasks',
    summary: 'Use Siri shortcuts to automate common tasks when dexterity is low.',
    formats: ['voice', 'video']
  },
  {
    id: 2,
    title: 'Ergonomic Kitchen Setup',
    summary: 'Arrange frequently used items at waist height to reduce bending and reaching.',
    formats: ['text', 'video']
  },
  {
    id: 3,
    title: 'Energy Pacing Technique',
    summary: 'Break tasks into 10-minute segments with rest periods in between.',
    formats: ['text']
  },
  {
    id: 4,
    title: 'Large Print Display Settings',
    summary: 'Increase system font size and enable high contrast mode for better visibility.',
    formats: ['video']
  },
];

export function BrowseByChallenge() {
  const navigate = useNavigate();
  const { isLowEnergy } = useLowEnergy();
  const [activeFilter, setActiveFilter] = useState('Mobility');

  const navItems = [
    { icon: <Home className="w-4 h-4" />, label: 'Home', path: '/' },
    { icon: <PlusCircle className="w-4 h-4" />, label: 'Post', path: '/create' },
    { icon: <Users className="w-4 h-4" />, label: 'Community', path: '/browse' },
    { icon: <User className="w-4 h-4" />, label: 'Profile', path: '/profile' },
  ];

  const getFormatIcons = (formats: string[]) => {
    const iconMap: { [key: string]: JSX.Element } = {
      video: <Video className="w-3 h-3" />,
      voice: <Mic className="w-3 h-3" />,
      text: <FileText className="w-3 h-3" />
    };
    return formats.map(format => iconMap[format] || null).filter(Boolean);
  };

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5]">
      <div className="flex-1 overflow-y-auto">
        <div className={`p-4 flex flex-col ${isLowEnergy ? 'gap-6' : 'gap-4'}`}>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((filter) => (
              <FilterChip
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>

          <div className={`flex flex-col ${isLowEnergy ? 'gap-6' : 'gap-3'}`}>
            {tips.map((tip) => (
              <CardList
                key={tip.id}
                title={tip.title}
                summary={tip.summary}
                formatIcons={getFormatIcons(tip.formats)}
                onClick={() => navigate(`/tip/${tip.id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNav items={navItems} />
    </div>
  );
}

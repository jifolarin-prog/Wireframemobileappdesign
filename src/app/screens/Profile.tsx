import { useState } from 'react';
import { CardList } from '../components/CardList';
import { BottomNav } from '../components/BottomNav';
import { Home, PlusCircle, Users, User } from 'lucide-react';
import { useLowEnergy } from '../contexts/LowEnergyContext';

const tabs = ['Portfolio', 'Tips Shared', 'Saved', 'Circles'];

const mockTips = [
  {
    id: 1,
    title: 'Voice Control for Hands-Free Tasks',
    summary: 'Use Siri shortcuts to automate common tasks when dexterity is low.',
  },
  {
    id: 2,
    title: 'Ergonomic Kitchen Setup',
    summary: 'Arrange frequently used items at waist height to reduce bending and reaching.',
  },
];

export function Profile() {
  const { isLowEnergy } = useLowEnergy();
  const [activeTab, setActiveTab] = useState('Portfolio');

  const navItems = [
    { icon: <Home className="w-4 h-4" />, label: 'Home', path: '/' },
    { icon: <PlusCircle className="w-4 h-4" />, label: 'Post', path: '/create' },
    { icon: <Users className="w-4 h-4" />, label: 'Community', path: '/browse' },
    { icon: <User className="w-4 h-4" />, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5]">
      <div className="flex-1 overflow-y-auto">
        <div className={`p-4 flex flex-col ${isLowEnergy ? 'gap-6' : 'gap-4'}`}>
          <div className="flex flex-col items-center gap-3 py-4">
            <div className={`rounded-full bg-[#D9D9D9] ${isLowEnergy ? 'w-24 h-24' : 'w-20 h-20'}`} />
            <h1 className={`font-bold text-[#000000] ${isLowEnergy ? 'text-2xl' : 'text-lg'}`}>
              Sarah Chen
            </h1>
            <p className={`text-[#666666] text-center max-w-xs ${isLowEnergy ? 'text-base' : 'text-sm'}`}>
              Sharing adaptive solutions for daily living with chronic pain and limited mobility.
            </p>
          </div>

          <div className="border-t border-[#D9D9D9]" />

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 whitespace-nowrap ${isLowEnergy ? 'text-base' : 'text-sm'}`}
                style={{
                  borderBottom: activeTab === tab ? '2px solid #000000' : 'none',
                  color: activeTab === tab ? '#000000' : '#999999'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={`flex flex-col ${isLowEnergy ? 'gap-6' : 'gap-3'}`}>
            {mockTips.map((tip) => (
              <CardList
                key={tip.id}
                title={tip.title}
                summary={tip.summary}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNav items={navItems} />
    </div>
  );
}

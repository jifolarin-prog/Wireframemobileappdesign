import { useParams } from 'react-router';
import { TagChip } from '../components/TagChip';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { BottomNav } from '../components/BottomNav';
import { Home, PlusCircle, Users, User, Heart, Bookmark, MessageCircle } from 'lucide-react';
import { useLowEnergy } from '../contexts/LowEnergyContext';

export function TipDetail() {
  const { id } = useParams();
  const { isLowEnergy } = useLowEnergy();

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
          <h1 className={`font-bold text-[#000000] ${isLowEnergy ? 'text-2xl' : 'text-lg'}`}>
            Voice Control for Hands-Free Tasks
          </h1>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9D9D9]" />
            <div>
              <p className={`text-[#333333] font-medium ${isLowEnergy ? 'text-base' : 'text-sm'}`}>
                Sarah Chen
              </p>
              <div className="flex gap-2 mt-1">
                <TagChip label="Mobility" />
                <TagChip label="Low Energy" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#D9D9D9] rounded-2xl overflow-hidden">
            <MediaPlaceholder height={200} label="Video Content" />
            <div className={`p-4 ${isLowEnergy ? 'text-base' : 'text-sm'} text-[#333333]`}>
              <p className="leading-relaxed">
                I've found that using Siri shortcuts has been a game-changer for managing daily tasks 
                when my hands aren't cooperating. I set up voice commands for turning on lights, 
                starting my coffee maker, and even sending quick messages to family members.
              </p>
              <p className="leading-relaxed mt-4">
                The setup takes about 20 minutes, but once it's done, you can do so much without 
                needing to physically interact with your devices. It's especially helpful on high-pain days.
              </p>
            </div>
          </div>

          {!isLowEnergy && (
            <div className="bg-white border border-[#D9D9D9] rounded-2xl p-3">
              <h3 className="text-sm font-bold text-[#333333] mb-2">Quick Summary</h3>
              <p className="text-sm text-[#666666]">
                Use Siri shortcuts to automate common tasks when dexterity is low. 
                Setup takes 20 minutes but provides hands-free control.
              </p>
            </div>
          )}

          <div className={`flex items-center ${isLowEnergy ? 'justify-center gap-8' : 'justify-around'} bg-white border border-[#D9D9D9] rounded-2xl h-12`}>
            <button className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#333333]" />
              {!isLowEnergy && <span className="text-sm text-[#333333]">Helped</span>}
            </button>
            <button className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-[#333333]" />
              {!isLowEnergy && <span className="text-sm text-[#333333]">Save</span>}
            </button>
            <button className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#333333]" />
              {!isLowEnergy && <span className="text-sm text-[#333333]">Comment</span>}
            </button>
          </div>
        </div>
      </div>

      <BottomNav items={navItems} />
    </div>
  );
}

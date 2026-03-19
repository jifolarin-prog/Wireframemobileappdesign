import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CardLarge } from '../components/CardLarge';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';
import { BottomNav } from '../components/BottomNav';
import { Home, PlusCircle, Users, User, Mic, Video, Image as ImageIcon, FileText } from 'lucide-react';
import { useLowEnergy } from '../contexts/LowEnergyContext';

export function CreatePost() {
  const navigate = useNavigate();
  const { isLowEnergy } = useLowEnergy();
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [challenge, setChallenge] = useState('');
  const [whatHelped, setWhatHelped] = useState('');
  const [toolsUsed, setToolsUsed] = useState('');

  const formats = [
    { id: 'voice', label: 'Record Voice', icon: <Mic className="w-6 h-6" /> },
    { id: 'video', label: 'Record Video', icon: <Video className="w-6 h-6" /> },
    { id: 'image', label: 'Upload Image', icon: <ImageIcon className="w-6 h-6" /> },
    { id: 'text', label: 'Write Text', icon: <FileText className="w-6 h-6" /> },
  ];

  const navItems = [
    { icon: <Home className="w-4 h-4" />, label: 'Home', path: '/' },
    { icon: <PlusCircle className="w-4 h-4" />, label: 'Post', path: '/create' },
    { icon: <Users className="w-4 h-4" />, label: 'Community', path: '/browse' },
    { icon: <User className="w-4 h-4" />, label: 'Profile', path: '/profile' },
  ];

  const handleSubmit = () => {
    console.log({ challenge, whatHelped, toolsUsed, format: selectedFormat });
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5]">
      <div className="flex-1 overflow-y-auto">
        <div className={`p-4 flex flex-col ${isLowEnergy ? 'gap-8' : 'gap-5'}`}>
          <h1 className={`font-bold text-[#000000] ${isLowEnergy ? 'text-2xl' : 'text-xl'}`}>
            Create Post
          </h1>

          <div>
            <h2 className={`text-[#333333] mb-3 ${isLowEnergy ? 'text-lg' : 'text-base'}`}>
              Select Format
            </h2>
            <div className={`${isLowEnergy ? 'flex flex-col gap-4' : 'grid grid-cols-2 gap-4'}`}>
              {formats.map((format) => (
                <button
                  key={format.id}
                  onClick={() => setSelectedFormat(format.id)}
                  className={`${isLowEnergy ? 'h-28' : 'h-25'} bg-white border rounded-2xl flex flex-col items-center justify-center gap-2`}
                  style={{
                    borderColor: selectedFormat === format.id ? '#333333' : '#D9D9D9',
                    borderWidth: selectedFormat === format.id ? '2px' : '1px'
                  }}
                >
                  <div className="w-8 h-8 bg-[#D9D9D9] flex items-center justify-center">
                    {format.icon}
                  </div>
                  <span className={`text-[#333333] ${isLowEnergy ? 'text-base' : 'text-sm'}`}>
                    {format.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={`bg-white border border-[#D9D9D9] rounded-2xl p-4 flex flex-col ${isLowEnergy ? 'gap-6' : 'gap-4'}`}>
            <InputField
              label="Challenge"
              placeholder="What challenge does this address?"
              value={challenge}
              onChange={setChallenge}
            />
            <InputField
              label="What helped"
              placeholder="Describe your solution"
              multiline
              value={whatHelped}
              onChange={setWhatHelped}
            />
            <InputField
              label="Tools used"
              placeholder="Any tools or products used?"
              value={toolsUsed}
              onChange={setToolsUsed}
            />
            <div className="flex flex-col gap-2">
              <label className={`text-[#999999] ${isLowEnergy ? 'text-sm' : 'text-xs'}`}>
                Energy level
              </label>
              <div className={`w-full bg-transparent border-b border-[#D9D9D9] pb-2 text-[#333333] ${isLowEnergy ? 'text-base min-h-12' : 'text-sm min-h-10'}`}>
                <select className="w-full bg-transparent outline-none">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
          </div>

          <PrimaryButton label="Share Tip" onClick={handleSubmit} />
        </div>
      </div>

      <BottomNav items={navItems} />
    </div>
  );
}

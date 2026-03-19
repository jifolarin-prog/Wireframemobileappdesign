import { createContext, useContext, useState, ReactNode } from 'react';

interface LowEnergyContextType {
  isLowEnergy: boolean;
  toggleLowEnergy: () => void;
}

const LowEnergyContext = createContext<LowEnergyContextType | undefined>(undefined);

export function LowEnergyProvider({ children }: { children: ReactNode }) {
  const [isLowEnergy, setIsLowEnergy] = useState(false);

  const toggleLowEnergy = () => {
    setIsLowEnergy(prev => !prev);
  };

  return (
    <LowEnergyContext.Provider value={{ isLowEnergy, toggleLowEnergy }}>
      {children}
    </LowEnergyContext.Provider>
  );
}

export function useLowEnergy() {
  const context = useContext(LowEnergyContext);
  if (context === undefined) {
    throw new Error('useLowEnergy must be used within a LowEnergyProvider');
  }
  return context;
}

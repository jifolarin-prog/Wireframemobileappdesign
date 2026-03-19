import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LowEnergyProvider } from './contexts/LowEnergyContext';

export default function App() {
  return (
    <LowEnergyProvider>
      <div className="w-full h-screen max-w-[390px] mx-auto bg-[#F5F5F5] overflow-hidden">
        <RouterProvider router={router} />
      </div>
    </LowEnergyProvider>
  );
}

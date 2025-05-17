import { ReactNode } from 'react';

interface ScreenProps {
  className?: string;
  children?: ReactNode;
}

export const Screen = ({ className, children }: ScreenProps) => (
  <div className={`flex bg-beige-700 p-10 rounded-lg border-1 border-beige-800 ${className}`}>
    <div className='p-10 flex flex-col text-green-400 text-lg bg-black gap-13 rounded-lg grow'>
      {children}
    </div>
  </div>
);

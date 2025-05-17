'use client';

import { PowerIcon } from '@/components/PowerIcon';
import { useState } from 'react';

export const PowerButton = () => {
  const [on, setOn] = useState(true);

  const handleClick = () => {
    setOn((prev) => !prev);
  }

  return (
    <div className='flex gap-3'>
      <div className='flex flex-col justify-evenly'>
        <div className={`w-3 h-3 rounded-full ${on ? 'bg-green-400' : 'bg-black'}`} />
        <div className={`w-3 h-3 rounded-full ${!on ? 'bg-red-400' : 'bg-black'}`} />
      </div>
      <button
        className='border-3 border-beige-800 rounded-lg'
        onClick={handleClick}
      >
        <div className='m-2 items-center flex flex-col font-sm font-berkeley-mono-extra-bold text-beige-800 px-7 pt-1 rounded-lg border-2 border-beige-800'>
          <PowerIcon />
          POWER
        </div>
      </button>
    </div>
  );
};

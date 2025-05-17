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
        <div className={`w-3 h-3 rounded-full outline-1 outline-beige-800 ${on ? 'bg-green-400' : 'bg-black'}`} />
        <div className={`w-3 h-3 rounded-full outline-1 outline-beige-800 ${!on ? 'bg-red-400' : 'bg-black'}`} />
      </div>
      <button
        className='border-3 rounded-lg active:border-beige-900 active:bg-beige-700'
        onClick={handleClick}
      >
        <div className='m-2 items-center flex flex-col px-7 pt-1 rounded-lg border-2 border-beige-800 active:border-beige-900'>
          <PowerIcon />
          <span className='font-sm font-berkeley-mono-extra-bold text-beige-800 active:text-beige-900'>POWER</span>
        </div>
      </button>
    </div>
  );
};

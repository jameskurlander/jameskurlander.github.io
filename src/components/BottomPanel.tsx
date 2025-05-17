import { PowerButton } from "@/components/PowerButton";

export const BottomPanel = () => (
  <div className='flex justify-between items-end'>
    <span className='text-black text-5xl font-berkeley-mono-extra-bold'>VaporVision</span>
    <div className='w-200 h-15 bg-black border-10 border-beige-700 outline-1 outline-beige-800' />
    <PowerButton />
  </div >
);

import { NavMenu } from '@/components/NavMenu';

export default function Page() {
  return (
    <div className='flex flex-col bg-black gap-13 m-20 p-13 w-[calc(100vw-160px)] h-[calc(100vh-160px)] border-beige-700 border-40 border-l-60 border-r-60 rounded-lg outline-beige-800 outline-1'>
      <div>
        <h1 className='text-7xl'>
          James Kurlander
          <span className='animate-pulse'>_</span>
        </h1>
        <span>Software Engineer</span>
      </div>
      <div className='flex flex-1/4 gap-50'>
        <NavMenu />
      </div>
      <span className='text-black text-3xl font-berkeley-mono-extra-bold fixed left-20 bottom-5'>VaporVision</span>
    </div>
  );
}

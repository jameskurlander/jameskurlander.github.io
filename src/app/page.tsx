import { BottomPanel } from '@/components/BottomPanel';
import { NavMenu } from '@/components/NavMenu';
import { Screen } from '@/components/Screen';
import { SidePanel } from '@/components/SidePanel';

export default function Page() {
  return (
    <div className='flex p-10 gap-10 h-screen w-screen'>
      <div className='flex flex-col grow justify-between gap-10'>
        <Screen className='grow'>
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
        </Screen>
        <BottomPanel />
      </div>
      <SidePanel className='basis-1/4' />
    </div>
  );
}

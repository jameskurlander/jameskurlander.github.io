import { NavMenu } from '@/components/NavMenu'

export default function Page() {
  return (
    <div className='flex flex-col bg-black gap-13 m-13 p-13 w-[calc(100vw-104px)] h-[calc(100vh-104px)] border-gray-600 border-1 rounded-xl'>
      <div>
        <h1 className='text-7xl'>
          James Kurlander
          <span className='animate-pulse'>_</span>
        </h1>
        <span>Software Engineer</span>
      </div>
      <div className='flex flex-1/4'>
        <NavMenu />
      </div>
    </div>
  )
}

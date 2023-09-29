import { HeroSection, KidsProfile, WatchOffline, YourTV } from './custom'
import '../../../styles/main.sass';
import { Navbar } from '../../layout';

function Separator() {
  return <div className='bg-gray-800 h-2'></div>
}

export default function Home() {
  return (
    <>
      <div className='min-h-screen w-full customBg'>
        <Navbar />
        <HeroSection />
      </div>
      <Separator />
      <YourTV />
      <Separator />
      <WatchOffline />
      <Separator />
      <KidsProfile />
    </>
  )
}
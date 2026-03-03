import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import Advantages from '@/components/sections/advantages';
import GameCategories from '@/components/sections/game-categories';
import RegistrationGuide from '@/components/sections/registration-guide';
import BonusProgram from '@/components/sections/bonus-program';
import MobileInfo from '@/components/sections/mobile-info';
import FAQSection from '@/components/sections/faq';
import ResponsibleGaming from '@/components/sections/responsible-gaming';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050b18] text-white">
      <Header />
      <main>
        <HeroSection />
        <Advantages />
        <GameCategories />
        <RegistrationGuide />
        <BonusProgram />
        <MobileInfo />
        <FAQSection />
        <ResponsibleGaming />
      </main>
      <Footer />
    </div>
  );
}

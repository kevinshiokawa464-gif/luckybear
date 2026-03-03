import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import EntranceInfo from '@/components/sections/entrance-info';
import MirrorSiteSection from '@/components/sections/mirror-site';
import Bonuses from '@/components/sections/bonuses';
import GameCatalog from '@/components/sections/game-catalog';
import FinancialsSection from '@/components/sections/financials';
import FAQ from '@/components/sections/faq';
import MobileSupport from '@/components/sections/mobile-support';
import SEOContent from '@/components/sections/seo-content';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1f29] text-white">
      <Header />
      <main>
        <Hero />
        <EntranceInfo />
        <MirrorSiteSection />
        <Bonuses />
        <GameCatalog />
        <FinancialsSection />
        <FAQ />
        <MobileSupport />
        <SEOContent />
      </main>
      <Footer />
    </div>
  );
}

import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1f29] text-white">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

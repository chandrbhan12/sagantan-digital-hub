import { Header } from '@/components/Header';
import { HeroSlider } from '@/components/HeroSlider';
import { ImageSlider } from '@/components/ImageSlider';
import { ObjectivesSection } from '@/components/ObjectivesSection';
import { SlogansSection } from '@/components/SlogansSection';
import { NewsSection } from '@/components/NewsSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSlider />
        </section>
        <section id="services">
          <ImageSlider />
        </section>
        <ObjectivesSection />
        <SlogansSection />
        <NewsSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
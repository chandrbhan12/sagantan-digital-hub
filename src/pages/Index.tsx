import { Header } from '@/components/Header';
import { HeroSlider } from '@/components/HeroSlider';
import { ImageSlider } from '@/components/ImageSlider';
import { ObjectivesSection } from '@/components/ObjectivesSection';
import { SlogansSection } from '@/components/SlogansSection';
import { NewsSection } from '@/components/NewsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSlider />
        </section>
        <ImageSlider />
        <ObjectivesSection />
        <SlogansSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    title: "Collaborative Innovation",
    description: "Teams working together to create digital solutions"
  },
  {
    id: 2,
    src: gallery2,
    title: "Technology Excellence",
    description: "Cutting-edge tools and innovative workspaces"
  },
  {
    id: 3,
    src: gallery3,
    title: "Digital Transformation",
    description: "Leading businesses into the digital future"
  },
  {
    id: 4,
    src: gallery4,
    title: "Strategic Planning",
    description: "Executive leadership driving digital initiatives"
  },
  {
    id: 5,
    src: gallery5,
    title: "Development Excellence",
    description: "Expert software development and innovation"
  },
  {
    id: 6,
    src: gallery6,
    title: "Success Stories",
    description: "Celebrating achievements and milestones"
  }
];

export const ImageSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      if (container.scrollLeft >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({ 
          left: container.scrollLeft + 400, 
          behavior: 'smooth' 
        });
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Work Environment</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the innovation and collaboration that drives our success
          </p>
        </div>

        <div className="relative group">
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 hover:-translate-y-2 group/card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover/card:text-primary-light transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 border-primary/20 shadow-custom-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 border-primary/20 shadow-custom-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
import { Quote } from 'lucide-react';

const slogans = [
  {
    text: "Innovation Today, Success Tomorrow",
    description: "Pioneering solutions that shape the future of digital business"
  },
  {
    text: "Where Technology Meets Purpose",
    description: "Aligning cutting-edge technology with meaningful business objectives"
  },
  {
    text: "Empowering Digital Transformation",
    description: "Enabling organizations to thrive in the digital-first economy"
  },
  {
    text: "Your Vision, Our Expertise",
    description: "Bringing your boldest ideas to life with our technical excellence"
  }
];

export const SlogansSection = () => {
  return (
    <section className="py-20 bg-hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Vision & Values</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Guiding principles that drive our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {slogans.map((slogan, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <Quote className="h-8 w-8 text-secondary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                    "{slogan.text}"
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {slogan.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
};
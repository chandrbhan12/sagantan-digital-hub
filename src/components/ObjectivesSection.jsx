import { Target, Lightbulb, Users, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const objectives = [
  {
    icon: Target,
    title: "Strategic Excellence",
    description: "Delivering targeted solutions that drive measurable business outcomes and sustainable growth for our partners."
  },
  {
    icon: Lightbulb,
    title: "Innovation Leadership",
    description: "Pioneering cutting-edge technologies and methodologies to stay ahead of industry trends and challenges."
  },
  {
    icon: Users,
    title: "Collaborative Success",
    description: "Building strong partnerships through transparent communication and shared commitment to excellence."
  },
  {
    icon: Rocket,
    title: "Future-Ready Solutions",
    description: "Creating scalable, adaptable solutions that evolve with your business needs and market demands."
  }
];

export const ObjectivesSection = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Objectives</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Sagantan Digital Hub, we are committed to transforming businesses through innovative digital solutions
            and strategic partnerships that create lasting value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-0 shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <objective.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">{objective.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
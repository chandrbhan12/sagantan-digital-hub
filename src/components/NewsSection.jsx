import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const newsItems = [
  {
    date: "2024-01-15",
    title: "Sagantan Launches New AI-Powered Analytics Platform",
    excerpt: "Revolutionary platform combines machine learning with business intelligence to deliver unprecedented insights for enterprise clients.",
    category: "Product Launch"
  },
  {
    date: "2024-01-10",
    title: "Partnership with Leading Tech Giants Announced",
    excerpt: "Strategic collaborations will expand our capabilities in cloud computing and digital transformation services.",
    category: "Partnership"
  },
  {
    date: "2024-01-05",
    title: "Sagantan Wins Digital Innovation Award 2024",
    excerpt: "Recognition for outstanding contribution to digital transformation in the healthcare sector.",
    category: "Achievement"
  },
  {
    date: "2023-12-28",
    title: "Year-End Milestones: 50+ Successful Projects",
    excerpt: "Celebrating a remarkable year with over 50 completed projects and 98% client satisfaction rate.",
    category: "Milestone"
  }
];

export const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Latest News & Updates</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our latest achievements, partnerships, and innovations in the digital space
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-white border-0 shadow-custom-md hover:shadow-custom-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(item.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span className="ml-auto bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary-light p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};
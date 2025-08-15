import { MessageCircle, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sagantanLogo from '@/assets/sagantan-logo.png';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={sagantanLogo} alt="Sagantan" className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold">Sagantan</h3>
                <p className="text-secondary">Digital Hub</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Empowering businesses through innovative digital solutions and strategic partnerships. 
              We transform ideas into reality with cutting-edge technology and expert execution.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="secondary" className="hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="secondary" className="hover:scale-110 transition-transform">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="secondary" className="hover:scale-110 transition-transform">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-secondary">About Us</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Mission & Vision</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Partnerships</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-secondary">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-white/80">123 Innovation Street<br />Digital City, DC 12345</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-white/80">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-white/80">info@sagantan.com</p>
              </div>
              
              {/* WhatsApp Contact */}
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white mt-4"
                onClick={() => window.open('https://wa.me/+1234567890', '_blank')}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Sagantan Digital Hub. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
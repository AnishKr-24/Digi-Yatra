import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Plane, Train, Bus } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';

const Hero = ({ 
  title = "Your Journey Starts Here",
  subtitle = "Book your Bus, Train, and Flight tickets with ease and get the best deals.",
  ctaText = "Start Booking",
  ctaLink = "/services/bus"
}) => {
  const quickLinks = [
    { name: 'Bus', icon: Bus, href: '/services/bus', color: 'text-primary' },
    { name: 'Train', icon: Train, href: '/services/train', color: 'text-secondary' },
    { name: 'Flight', icon: Plane, href: '/services/flight', color: 'text-accent' },
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-accent-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 min-w-[200px]"
                asChild
              >
                <Link to={ctaLink} className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  {ctaText}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 min-w-[200px] bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                asChild
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Service Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up">
            {quickLinks.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <service.icon className={`h-12 w-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                  <p className="text-white/80">Book {service.name.toLowerCase()} tickets instantly</p>
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;
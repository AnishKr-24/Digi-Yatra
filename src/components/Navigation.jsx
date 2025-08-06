import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X, Plane, Train, Bus, Gift, User, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'Bus Booking', href: '/services/bus', icon: Bus, description: 'Book bus tickets across India' },
    { title: 'Train Booking', href: '/services/train', icon: Train, description: 'Find and book train journeys' },
    { title: 'Flight Booking', href: '/services/flight', icon: Plane, description: 'Domestic & international flights' },
  ];
  const offers = [
    { title: 'Bus Offers', href: '/offers/bus', icon: Bus, description: 'Exclusive bus travel deals' },
    { title: 'Train Offers', href: '/offers/train', icon: Train, description: 'Special train booking offers' },
    { title: 'Flight Offers', href: '/offers/flight', icon: Plane, description: 'Amazing flight discounts' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-medium border-b border-border' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Digi Yatra
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      location.pathname === '/' ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-6 md:w-[600px] lg:w-[700px] lg:grid-cols-3">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.href} asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center space-x-3">
                              <service.icon className="h-6 w-6 text-primary group-hover:text-accent-foreground transition-colors" />
                              <div>
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Offers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-6 md:w-[600px] lg:w-[700px] lg:grid-cols-3">
                      {offers.map((offer) => (
                        <NavigationMenuLink key={offer.href} asChild>
                          <Link
                            to={offer.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center space-x-3">
                              <Gift className="h-6 w-6 text-secondary group-hover:text-accent-foreground transition-colors" />
                              <div>
                                <div className="text-sm font-medium leading-none">{offer.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                  {offer.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      location.pathname === '/about' ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/auth" className="flex items-center space-x-2">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/auth" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Sign Up</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-medium animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="flex items-center space-x-3 py-2 pl-4 text-sm transition-colors hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <service.icon className="h-4 w-4" />
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Offers</div>
                {offers.map((offer) => (
                  <Link
                    key={offer.href}
                    to={offer.href}
                    className="flex items-center space-x-3 py-2 pl-4 text-sm transition-colors hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Gift className="h-4 w-4" />
                    <span>{offer.title}</span>
                  </Link>
                ))}
              </div>

              <Link 
                to="/about" 
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <div className="pt-4 space-y-3 border-t border-border">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
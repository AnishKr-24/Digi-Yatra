import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  variant = 'primary',
  features = []
}) => {
  const variantStyles = {
    primary: 'border-primary/20 hover:border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10',
    secondary: 'border-secondary/20 hover:border-secondary/40 bg-gradient-to-br from-secondary/5 to-secondary/10',
    accent: 'border-accent/20 hover:border-accent/40 bg-gradient-to-br from-accent/5 to-accent/10',
  };

  const iconStyles = {
    primary: 'text-primary bg-primary/10',
    secondary: 'text-secondary bg-secondary/10',
    accent: 'text-accent bg-accent/10',
  };

  const buttonVariants = {
    primary: 'hero',
    secondary: 'cta',
    accent: 'default',
  };

  return (
    <Card className={cn(
      'group p-8 h-full border-2 transition-all duration-300 hover:shadow-large hover:-translate-y-2 cursor-pointer',
      variantStyles[variant]
    )}>
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className={cn(
          'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300',
          iconStyles[variant]
        )}>
          <Icon className="h-8 w-8" />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          {features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Button */}
        <Button 
          variant={buttonVariants[variant]} 
          className="w-full group-hover:shadow-medium transition-all duration-300"
          asChild
        >
          <Link to={href} className="flex items-center justify-center gap-2">
            Book Now
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
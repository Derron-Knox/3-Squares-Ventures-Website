
import React from 'react';
import Button from './ui/Button';
import { CheckIcon } from './ui/Icon';

interface HeroProps {
  onGetQuoteClick: () => void;
}

const TrustBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center gap-2 bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
        <CheckIcon />
        <span>{children}</span>
    </div>
);

const Hero: React.FC<HeroProps> = ({ onGetQuoteClick }) => {
  return (
    <section 
      className="relative bg-cover bg-center bg-fixed text-white py-32 md:py-48" 
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521927359444-150a00501b22?q=75&w=1920&auto=format&fit=crop')` }}
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-brand-gray bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-wider text-shadow-lg">
          Your Partner for Demolition, Remodeling & Exterior Property Services
        </h1>
        <p className="mt-4 text-xl md:text-3xl font-body italic text-gray-200">
          Expert solutions for your property, inside and out.
        </p>
        
        {/* Slogan with high-impact styling */}
        <div className="mt-8">
            <div className="inline-block bg-brand-gold text-white px-6 py-3 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <p className="font-headline text-xl md:text-2xl font-bold tracking-wider">
                    "Residential or Commercial, Big or Small - We Demolish & Remove It All."
                </p>
            </div>
        </div>

        <p className="mt-8 text-lg md:text-2xl max-w-3xl mx-auto">
          Licensed & insured crews serving the Greater Mississippi Area. Fast scheduling. Free estimates.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" as="a" href="tel:469-907-4920">Call Now</Button>
          <Button variant="outline" onClick={onGetQuoteClick}>Request a Quote</Button>
        </div>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <TrustBadge>Licensed & Insured</TrustBadge>
          <TrustBadge>OSHA-Compliant</TrustBadge>
          <TrustBadge>Same-Week Scheduling</TrustBadge>
        </div>
      </div>
    </section>
  );
};

export default Hero;

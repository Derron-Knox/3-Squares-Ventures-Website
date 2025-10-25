import React, { useState, useRef } from 'react';
import { Service } from '../types';
import Button from './ui/Button';
import ServiceModal from './ServiceModal';
import services from '../content/data/services.json';
import { DemolitionIcon, TreeIcon, TireIcon, ConcreteIcon, RemodelIcon, PressureWashingIcon } from './ui/Icon';

const iconMap: { [key: string]: React.ElementType } = {
  demolition: DemolitionIcon,
  remodel: RemodelIcon,
  tree: TreeIcon,
  concrete: ConcreteIcon,
  tire: TireIcon,
  pressureWashing: PressureWashingIcon,
};


interface ServiceCardProps {
  service: Service;
  onGetQuoteClick: () => void;
  onLearnMore: (service: Service, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onGetQuoteClick, onLearnMore }) => {
  const IconComponent = iconMap[service.icon] || 'div';
  return (
    <div className="group bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <div className="p-8 bg-brand-blue text-white flex items-center gap-4">
        <div className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-6">
          <IconComponent />
        </div>
        <h3 className="text-2xl font-headline font-bold">{service.title}</h3>
      </div>
      <div className="p-8 flex-grow">
        <p className="mb-6">{service.description}</p>
        <ul className="space-y-2">
          {service.jobs.map((job) => (
            <li key={job} className="flex items-start">
              <span className="text-brand-gold mr-2 mt-1">✓</span>
              <span>{job}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 pt-0 mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button
          onClick={(e) => onLearnMore(service, e)}
          variant="outline"
          className="w-full !text-brand-blue !border-brand-blue hover:!bg-brand-blue hover:!text-white"
        >
          Learn More
        </Button>
        <Button onClick={onGetQuoteClick} variant="secondary" className="w-full">
          Get Quote
        </Button>
      </div>
    </div>
  );
};


interface ServicesProps {
  onGetQuoteClick: () => void;
}

const Services = React.forwardRef<HTMLElement, ServicesProps>(({ onGetQuoteClick }, ref) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleLearnMore = (service: Service, event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedService(service);
    triggerButtonRef.current = event.currentTarget;
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    triggerButtonRef.current?.focus();
  };


  return (
    <>
      <section id="services" className="py-20 bg-brand-light-gray" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-brand-gray">Our Services</h2>
            <p className="mt-2 text-lg text-gray-600">Safe. Fast. Done Right.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(services as Service[]).map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                onGetQuoteClick={onGetQuoteClick}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
});

Services.displayName = 'Services';

export default Services;

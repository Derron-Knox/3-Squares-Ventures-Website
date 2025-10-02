import React, { useState, useRef } from 'react';
import { Service } from '../types';
import Button from './ui/Button';
import { DemolitionIcon, TreeIcon, TireIcon, ConcreteIcon, RemodelIcon, PressureWashingIcon } from './ui/Icon';
import ServiceModal from './ServiceModal';

const demolitionServices: Service = {
  icon: DemolitionIcon,
  title: 'Demolition Services',
  description: 'From single structures to full lot clearing, we handle all demolition jobs with precision and a focus on safety.',
  jobs: [
    'Residential Demolition (homes, garages)',
    'Interior/Gut Demolition',
    'Concrete & Asphalt Removal',
    'Hauling & Debris Removal',
    'Land/Lot Clearing & Grading',
  ],
  detailedDescription: 'Our comprehensive demolition services cover every phase of your project, from initial assessment and permitting to final site cleanup. We utilize modern equipment and proven techniques to ensure every job, whether a selective interior gut-out or a complete building teardown, is performed safely, efficiently, and in compliance with all local regulations. We are committed to responsible debris management, recycling materials whenever possible to minimize environmental impact.',
  projectExamples: [
    {
      title: 'Single-Family Home Teardown',
      description: 'Complete demolition of a fire-damaged 2,500 sq ft house, including foundation removal and site grading for new construction.',
      image: 'https://images.unsplash.com/photo-1604479937144-33d3d4411649?q=75&w=800&auto=format&fit=crop'
    },
    {
      title: 'Commercial Interior Gut-Out',
      description: 'Stripped a 10,000 sq ft retail space back to the studs for a full remodel, carefully preserving structural elements and systems.',
      image: 'https://images.unsplash.com/photo-1588796123733-a94709af4e7e?q=75&w=800&auto=format&fit=crop'
    }
  ],
  safetyProtocols: [
    'Pre-demolition site inspection and hazard assessment.',
    'Secure perimeter establishment and dust control measures.',
    'Systematic utility disconnection verification (gas, water, electric).',
    'OSHA-certified crew and supervisor on-site at all times.',
    'Structural stability analysis before and during teardown.'
  ]
};

const homeRemodelService: Service = {
  icon: RemodelIcon,
  title: 'Home Remodel Services',
  description: 'Transform your space with our full-service remodeling, from kitchens and baths to decks, fences, and whole-home renovations.',
  jobs: [
    'Kitchen Remodeling',
    'Bathroom Renovations',
    'Roofing Repair & Replacement',
    'Deck Repair & New Builds',
    'Fence Repair & New Builds',
    'Basement Finishing',
    'Room Additions',
    'Full Home Remodels',
  ],
  detailedDescription: 'Whether you\'re looking to update a single room or transform your entire home, our skilled team manages every detail of the remodeling process. We combine quality craftsmanship with premium materials to bring your vision to life. Our process is collaborative, ensuring we understand your needs and style to create a space that is both beautiful and functional, all while respecting your budget and timeline.',
  projectExamples: [
    {
      title: 'Modern Kitchen Overhaul',
      description: 'Complete gut and remodel of a 1980s kitchen, featuring custom cabinetry, quartz countertops, and a functional island.',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=75&w=800&auto=format&fit=crop'
    },
    {
      title: 'Luxury Master Bath Update',
      description: 'Transformed an outdated master bathroom into a spa-like retreat with a walk-in shower, freestanding tub, and dual vanity.',
      image: 'https://images.unsplash.com/photo-1632994073347-abc2b7f07c74?q=75&w=800&auto=format&fit=crop'
    }
  ],
  safetyProtocols: [
    'Lead and asbestos testing for older homes before starting work.',
    'Proper ventilation and dust control systems to maintain air quality.',
    'Licensed electricians and plumbers for all wiring and plumbing work.',
    'Adherence to all local building codes and permit requirements.',
    'Daily site cleanup to ensure a safe working environment.'
  ]
};

const treeServices: Service = {
  icon: TreeIcon,
  title: 'Tree Services',
  description: 'Our expert crews safely manage everything from hazardous tree removal to routine pruning and emergency cleanup.',
  jobs: [
    'Hazardous & Large Tree Removal',
    'Tree Trimming & Pruning',
    'Stump Grinding & Removal',
    'Emergency Storm Cleanup',
    'Brush Clearing & Chipping',
  ],
  detailedDescription: 'With certified arborists on staff, we offer a full suite of tree care services that prioritize the health of your landscape and the safety of your property. We use specialized equipment, including cranes for complex removals in tight spaces, to handle any situation with minimal disruption. Whether you need routine maintenance to enhance your property\'s beauty or rapid response after a storm, our team is equipped and ready to help.',
  projectExamples: [
    {
      title: 'Crane-Assisted Oak Removal',
      description: 'Safely dismantled a 100-foot oak tree overhanging a home using a crane to lift sections away without property damage.',
      image: 'https://images.unsplash.com/photo-1621968853629-43c77b35043f?q=75&w=800&auto=format&fit=crop'
    },
    {
      title: 'Emergency Storm Response',
      description: 'Removed a large fallen pine from a roof, tarped the damaged area, and cleared all debris within hours of the call.',
      image: 'https://images.unsplash.com/photo-1589112874977-13356079b7b9?q=75&w=800&auto=format&fit=crop'
    }
  ],
  safetyProtocols: [
    'Certified arborist assessment for tree stability and hazards.',
    'Use of industry-standard rigging and cutting techniques.',
    'Full Personal Protective Equipment (PPE) for all crew members.',
    'Clear drop zones and constant communication protocols.',
    'Site-specific traffic and pedestrian control plans.'
  ]
};

const concreteServices: Service = {
  icon: ConcreteIcon,
  title: 'Concrete Services',
  description: 'We handle all aspects of concrete removal, from driveways and patios to foundations, with safe and efficient breaking and hauling.',
  jobs: [
    'Driveway & Patio Removal',
    'Foundation Removal & Breaking',
    'Concrete Cutting & Coring',
    'Sidewalk & Curb Removal',
    'Hauling & Concrete Recycling',
  ],
  detailedDescription: 'Our expert team is equipped with heavy-duty machinery to tackle any concrete removal project, big or small. We specialize in breaking down, cutting, and hauling away concrete structures like driveways, foundations, patios, and sidewalks. We prioritize precision to minimize disruption to surrounding areas and follow strict safety protocols, including silica dust control. All removed concrete is transported to certified facilities for recycling, contributing to a more sustainable process.',
  projectExamples: [
    {
      title: 'Residential Driveway Replacement Prep',
      description: 'Broke up and removed a 1,200 sq ft cracked concrete driveway and walkway, preparing the site for a new pour.',
      image: 'https://images.unsplash.com/photo-1617066923412-4c57173e1cb1?q=75&w=800&auto=format&fit=crop'
    },
    {
      title: 'Commercial Foundation Demolition',
      description: 'Demolished and cleared a 5,000 sq ft concrete slab foundation from a former commercial building for site redevelopment.',
      image: 'https://images.unsplash.com/photo-1576013359334-05a7692db213?q=75&w=800&auto=format&fit=crop'
    }
  ],
  safetyProtocols: [
    'Implementation of water-based dust suppression systems to control silica dust.',
    'Site assessment for underground utilities before breaking ground.',
    'Use of specialized hydraulic hammers and saws for controlled demolition.',
    'Full Personal Protective Equipment (PPE), including respiratory protection.',
    'Secure work zones with clear barriers to ensure public and site safety.'
  ]
};

const wasteTireHaulingService: Service = {
  icon: TireIcon,
  title: 'Waste Tire Hauling',
  description: 'We responsibly collect and dispose of old tires from any location, helping you clean up your site.',
  jobs: [
    'Job site cleanups',
    'Property rehabilitation projects',
    'Construction site tire removal',
    'Bulk tire collection & disposal',
    'Residential & commercial properties'
  ],
  detailedDescription: 'Proper tire disposal is crucial for environmental safety and property aesthetics. Our Waste Tire Hauling service offers a convenient and compliant solution for removing unwanted tires from any location, including construction sites, commercial properties, and residential areas. We handle everything from collection to transportation and proper disposal at certified facilities, ensuring tires are recycled or disposed of according to state and federal regulations. Let us help you clear your property of unsightly and hazardous tire waste.',
  projectExamples: [
    {
      title: 'Commercial Lot Cleanup',
      description: 'Removed over 500 tires from an abandoned commercial lot, preparing it for redevelopment.',
      image: 'https://images.unsplash.com/photo-1563278911-39659a85231a?q=75&w=800&auto=format&fit=crop'
    },
    {
      title: 'Post-Construction Site Clearing',
      description: 'Collected and hauled away waste tires left behind after a major construction project, ensuring the site was clean and compliant.',
      image: 'https://images.unsplash.com/photo-1619453911138-2c2d4a5a1375?q=75&w=800&auto=format&fit=crop'
    }
  ],
  safetyProtocols: [
    'Adherence to all environmental regulations for tire transportation and disposal.',
    'Use of appropriate Personal Protective Equipment (PPE) by our crew.',
    'Secure loading and transportation to prevent road hazards.',
    'Verification of disposal at licensed and certified recycling facilities.',
    'Site assessment to ensure safe and efficient collection.'
  ]
};

const pressureWashingService: Service = {
  icon: PressureWashingIcon,
  title: 'Pressure Washing',
  description: 'Restore your property\'s curb appeal with our professional high-power washing for siding, driveways, decks, and more.',
  jobs: [
    'House Siding & Exterior Wash',
    'Driveway & Sidewalk Cleaning',
    'Deck & Patio Power Washing',
    'Fence Cleaning & Restoration',
    'Commercial Building Exteriors',
  ],
  detailedDescription: 'Over time, dirt, grime, mold, and mildew can build up on your property\'s exterior surfaces, diminishing its appearance and value. Our professional pressure washing services safely and effectively remove these stubborn contaminants. We use state-of-the-art equipment and adjustable pressure settings to clean a wide variety of surfaces—from delicate vinyl siding to durable concrete—without causing damage. Revitalize your home or business and protect your investment with a thorough, professional cleaning.',
  projectExamples: [
    {
      title: 'Driveway Grime Removal',
      description: 'Restored a heavily stained concrete driveway to its original bright finish, removing years of oil stains and dirt buildup.',
      image: 'https://images.unsplash.com/photo-1621653245053-43303a1158a1?q=75&w=800&auto=format&fit=crop'
    },
    {
      title: 'Vinyl Siding Mold & Mildew Treatment',
      description: 'Safely cleaned green and black mold from a home\'s north-facing vinyl siding, dramatically improving its curb appeal.',
      image: 'https://images.unsplash.com/photo-1607581987535-da6373b3135b?q=75&w=800&auto=format&fit=crop'
    }
  ],
  safetyProtocols: [
    'Surface material analysis to determine the correct pressure and nozzle.',
    'Use of biodegradable and environmentally-friendly cleaning solutions.',
    'Protection of nearby plants, windows, and electrical outlets.',
    'Use of proper safety gear, including eye and hearing protection.',
    'Systematic cleaning process to ensure a uniform, streak-free finish.'
  ]
};


interface ServiceCardProps {
  service: Service;
  onGetQuoteClick: () => void;
  onLearnMore: (service: Service, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onGetQuoteClick, onLearnMore }) => (
  <div className="group bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
    <div className="p-8 bg-brand-blue text-white flex items-center gap-4">
      <div className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-6">
        <service.icon />
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
            <ServiceCard 
              service={demolitionServices} 
              onGetQuoteClick={onGetQuoteClick} 
              onLearnMore={handleLearnMore} 
            />
            <ServiceCard 
              service={homeRemodelService} 
              onGetQuoteClick={onGetQuoteClick} 
              onLearnMore={handleLearnMore}
            />
            <ServiceCard 
              service={treeServices} 
              onGetQuoteClick={onGetQuoteClick} 
              onLearnMore={handleLearnMore}
            />
            <ServiceCard 
              service={concreteServices} 
              onGetQuoteClick={onGetQuoteClick} 
              onLearnMore={handleLearnMore}
            />
            <ServiceCard 
              service={wasteTireHaulingService} 
              onGetQuoteClick={onGetQuoteClick} 
              onLearnMore={handleLearnMore}
            />
            <ServiceCard 
              service={pressureWashingService} 
              onGetQuoteClick={onGetQuoteClick} 
              onLearnMore={handleLearnMore}
            />
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

export default Services;
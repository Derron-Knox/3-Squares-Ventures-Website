import { Service } from '../types';

const demolitionServices: Service = {
  // FIX: Type 'FC<{}>' is not assignable to type 'string'. Changed to string literal.
  icon: 'demolition',
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
      title: 'Home Teardown & Site Grading',
      description: 'Complete demolition of a residential property, followed by site clearing and grading for new construction.',
      image: '/gallery-demolition.jpg'
    },
    {
      title: 'Commercial Interior Gut-Out',
      description: 'Stripped a 10,000 sq ft retail space back to the studs for a full remodel, carefully preserving structural elements and systems.',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=75&w=800&auto=format&fit=crop'
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
  // FIX: Type 'FC<{}>' is not assignable to type 'string'. Changed to string literal.
  icon: 'remodel',
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
      title: 'Full Bathroom Renovation',
      description: 'Complete gut and remodel of an outdated bathroom, featuring new tile, vanity, and modern fixtures.',
      image: '/gallery-bathroom-remodel.jpg'
    },
    {
      title: 'Asphalt Shingle Roof Replacement',
      description: 'Full tear-off and replacement of an aging roof with new architectural shingles, ensuring long-term protection.',
      image: '/gallery-roof-replacement.jpg'
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
  // FIX: Type 'FC<{}>' is not assignable to type 'string'. Changed to string literal.
  icon: 'tree',
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
      image: 'https://images.unsplash.com/photo-1621980287829-23636f3ed45a?q=75&w=800&auto=format&fit=crop'
    },
    {
      title: 'Emergency Storm Response',
      description: 'Removed a large fallen pine from a roof, tarped the damaged area, and cleared all debris within hours of the call.',
      image: 'https://images.unsplash.com/photo-1608223637402-a428c94622f9?q=75&w=800&auto=format&fit=crop'
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
  // FIX: Type 'FC<{}>' is not assignable to type 'string'. Changed to string literal.
  icon: 'concrete',
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
      image: 'https://images.unsplash.com/photo-1589938517246-8575a7b8823b?q=75&w=800&auto=format&fit=crop'
    },
    {
      title: 'Commercial Foundation Demolition',
      description: 'Demolished and cleared a 5,000 sq ft concrete slab foundation from a former commercial building for site redevelopment.',
      image: 'https://images.unsplash.com/photo-1626284267482-882da70a1a0f?q=75&w=800&auto=format&fit=crop'
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
  // FIX: Type 'FC<{}>' is not assignable to type 'string'. Changed to string literal.
  icon: 'tire',
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
      image: 'https://images.unsplash.com/photo-1544828331-56e6a4b13a89?q=75&w=800&auto=format&fit=crop'
    },
    {
      title: 'Post-Construction Site Clearing',
      description: 'Collected and hauled away waste tires left behind after a major construction project, ensuring the site was clean and compliant.',
      image: 'https://images.unsplash.com/photo-1628522513498-25cfb867c46a?q=75&w=800&auto=format&fit=crop'
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
  // FIX: Type 'FC<{}>' is not assignable to type 'string'. Changed to string literal.
  icon: 'pressureWashing',
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
      title: 'Brick & Concrete Power Washing',
      description: 'Restored a brick facade and concrete patio to their original appearance, removing years of dirt and grime.',
      image: '/gallery-pressure-washing.jpg'
    },
    {
      title: 'Vinyl Siding Mold & Mildew Treatment',
      description: 'Safely cleaned green and black mold from a home\'s north-facing vinyl siding, dramatically improving its curb appeal.',
      image: 'https://images.unsplash.com/photo-1621253921312-51a8220ab421?q=75&w=800&auto=format&fit=crop'
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

export const services: Service[] = [
    demolitionServices,
    homeRemodelService,
    treeServices,
    concreteServices,
    wasteTireHaulingService,
    pressureWashingService
];
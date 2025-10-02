import React from 'react';
import { ChatBubbleIcon, ClipboardListIcon, TruckIcon, SparklesIcon } from './ui/Icon';

const processSteps = [
  {
    icon: ChatBubbleIcon,
    title: '1. Contact & Quote',
    description: "Reach out via phone or our form. We'll discuss your project and provide a free, detailed, no-obligation quote.",
  },
  {
    icon: ClipboardListIcon,
    title: '2. Scheduling',
    description: 'Once you approve the quote, we work with you to schedule the project at a time that is most convenient.',
  },
  {
    icon: TruckIcon,
    title: '3. Project Execution',
    description: 'Our licensed and insured crew arrives on time and completes the job safely, efficiently, and to the highest standards.',
  },
  {
    icon: SparklesIcon,
    title: '4. Cleanup & Completion',
    description: 'We conduct a thorough site cleanup and perform a final walk-through with you to ensure 100% satisfaction.',
  },
];

const OurProcess = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-brand-gray">Our Simple 4-Step Process</h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">From first call to final cleanup, we handle every detail to ensure your project is seamless and stress-free.</p>
        </div>
        <div className="relative">
            {/* Connector line for desktop */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-200" style={{ zIndex: 0 }}>
                <div className="h-full bg-brand-gold" style={{ width: '90%', margin: '0 5%' }}></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
                <div key={index} className="text-center flex flex-col items-center z-10">
                <div className="bg-brand-gold text-white rounded-full w-24 h-24 flex items-center justify-center border-4 border-brand-light-gray mb-4">
                    <step.icon className="w-12 h-12" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                    <h3 className="text-xl font-headline font-bold text-brand-blue">{step.title}</h3>
                    <p className="mt-2 text-gray-700">{step.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
});

export default OurProcess;
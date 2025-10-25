import React from 'react';

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-5xl font-headline font-bold text-brand-gold">{value}</p>
    <p className="mt-1 text-lg text-brand-gray">{label}</p>
  </div>
);

const Feature: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-headline font-bold text-brand-blue">{title}</h3>
    <p className="mt-2 text-gray-700">{children}</p>
  </div>
);

const WhyChooseUs = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-brand-gray">Why Choose 3 Squares Ventures?</h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            We're a local, family-owned team dedicated to providing safe, reliable, and efficient services to Jackson and surrounding communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Feature title="Safety-First Culture">
            Our OSHA-compliant crews prioritize safety on every job site, protecting your property and our team.
          </Feature>
          <Feature title="Licensed & Fully Insured">
            Rest easy knowing we carry comprehensive liability and workers' compensation insurance for every project.
          </Feature>
          <Feature title="Transparent, Up-Front Pricing">
            No surprises. We provide detailed, honest quotes so you know exactly what to expect before we start.
          </Feature>
          <Feature title="Fast Turnaround & Clean Sites">
            We respect your time and property, ensuring projects are completed efficiently and job sites are left clean.
          </Feature>
          <Feature title="Eco-Friendly Disposal">
            We prioritize recycling and responsible disposal of materials whenever possible to minimize environmental impact.
          </Feature>
          <Feature title="Local, Family-Owned Service">
            As members of the community, we're committed to building lasting relationships based on trust and quality work.
          </Feature>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="250+" label="Projects Completed" />
          <Stat value="100%" label="Safety Record" />
          <Stat value="<24hr" label="Response Time" />
          <Stat value="5-Star" label="Average Rating" />
        </div>
      </div>
    </section>
  );
});

WhyChooseUs.displayName = 'WhyChooseUs';

export default WhyChooseUs;
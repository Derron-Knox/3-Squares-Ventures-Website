
import React, { useState } from 'react';

const serviceAreas = [
  'Jackson Metro', 'The Delta', 'Gulf Coast', 'Pine Belt', 'Golden Triangle', 'and statewide for major projects.'
];

const ServiceAreas: React.FC = () => {
  const [mapError, setMapError] = useState(false);
  const [mapActive, setMapActive] = useState(false);

  return (
    <section id="service-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-headline font-bold text-brand-gray">Proudly Serving the Greater Mississippi Area</h2>
            <p className="mt-4 text-lg text-gray-700">
              While we are based in the Jackson metro, our crews travel throughout the state to provide expert demolition and tree services to a wide range of communities across Mississippi.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-headline font-semibold text-brand-blue">Areas We Serve Include:</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {serviceAreas.join(', ')}
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg shadow-md overflow-hidden bg-gray-200">
            {mapError ? (
              <img 
                src="https://images.unsplash.com/photo-1581171801235-186e2a86c66a?q=75&w=800&auto=format&fit=crop" 
                alt="3 Squares Ventures LLC worksite with heavy machinery" 
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                {!mapActive && (
                  <div
                    role="button"
                    tabIndex={0}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer transition-opacity hover:bg-opacity-50"
                    onClick={() => setMapActive(true)}
                    onKeyPress={(e) => e.key === 'Enter' && setMapActive(true)}
                    aria-label="Activate map to interact"
                  >
                    <div className="text-center p-4 rounded-lg bg-black bg-opacity-70">
                      <p className="text-white text-lg font-headline font-semibold">Click to Interact with Map</p>
                      <p className="text-gray-300 text-sm mt-1">Zoom and pan to explore our service area</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://maps.google.com/maps?q=Mississippi&t=&z=7&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  className={mapActive ? '' : 'pointer-events-none'}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Interactive map of our service area covering the greater Mississippi area"
                  onError={() => setMapError(true)}
                ></iframe>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
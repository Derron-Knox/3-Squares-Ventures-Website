import React, { useEffect, useRef } from 'react';
import { Service } from '../types';
import { XIcon, CheckIcon } from './ui/Icon';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'Tab') {
        // Since the close button is the only focusable element,
        // we can just prevent tabbing away from it.
        event.preventDefault();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    const closeButton = modalRef.current?.querySelector('button');
    closeButton?.focus();

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in"
      aria-labelledby="service-modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col relative transform animate-slide-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <header className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center z-10">
          <h2 id="service-modal-title" className="text-3xl font-headline text-brand-blue">{service.title}</h2>
          <button
            onClick={onClose}
            aria-label="Close service details"
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
          >
            <XIcon />
          </button>
        </header>

        <main className="p-8">
          <p className="text-lg text-gray-700 mb-8">{service.detailedDescription}</p>

          <div className="mb-8">
            <h3 className="text-2xl font-headline text-brand-gray mb-4 border-l-4 border-brand-gold pl-3">Project Examples</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {service.projectExamples.map((example, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
                  <img src={example.image} alt={example.title} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-4">
                    <h4 className="font-bold text-lg text-brand-gray">{example.title}</h4>
                    <p className="text-gray-600 mt-1">{example.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-headline text-brand-gray mb-4 border-l-4 border-brand-gold pl-3">Our Safety Commitment</h3>
            <ul className="space-y-3">
              {service.safetyProtocols.map((protocol, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-gray-700">{protocol}</span>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ServiceModal;
import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDownIcon } from './ui/Icon';

const faqItems: FaqItem[] = [
  { question: "Do I need a permit for my demolition project?", answer: "It depends on the scope and location of your project. We can guide you through the permitting process and help ensure all necessary paperwork is filed with the local authorities." },
  { question: "How do you handle utility lines before demolition?", answer: "Safety is our top priority. We coordinate with local utility companies to locate and safely disconnect all gas, water, and electrical lines before any work begins." },
  { question: "How is the price for demolition or tree removal determined?", answer: "Pricing is based on several factors, including the size and complexity of the structure or tree, site accessibility, and the amount of debris to be removed. We provide free, detailed on-site estimates for accurate pricing." },
  { question: "Can you work in tight spaces or near other buildings?", answer: "Absolutely. Our experienced crews are skilled in surgical demolition and precision tree removal, using specialized equipment to work safely in confined areas without damaging adjacent properties." },
  { question: "Do you haul away all debris, including stumps?", answer: "Yes, our service is comprehensive. We handle all debris removal, hauling, and disposal. Stump grinding and complete stump removal are also core services we offer." },
  { question: "Are you licensed and insured?", answer: "Yes, 3 Squares Ventures LLC is fully licensed and carries comprehensive general liability and workers' compensation insurance. We are happy to provide proof of insurance upon request." },
];

const FaqItemComponent: React.FC<{ item: FaqItem; index: number }> = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const panelId = `faq-panel-${index}`;
    const buttonId = `faq-button-${index}`;

    return (
        <div className="border-b border-gray-200">
            <h3>
                <button
                    id={buttonId}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center w-full py-5 text-left text-lg font-headline font-medium text-brand-gray"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                >
                    <span>{item.question}</span>
                    <ChevronDownIcon className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h3>
            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-5 pr-10 text-gray-700">
                    <p>{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-brand-gray">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItemComponent key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
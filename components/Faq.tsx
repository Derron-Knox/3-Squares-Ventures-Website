import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDownIcon } from './ui/Icon';
import faqItems from '../content/data/faq.json';

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const panelId = `faq-panel-${item.id}`;
    const buttonId = `faq-button-${item.id}`;

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
          {faqItems.map((item) => (
            <FaqItemComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

import React from 'react';
import { Testimonial } from '../types';
import { StarIcon } from './ui/Icon';

const testimonials: Testimonial[] = [
  { quote: "The 3 Squares team was incredible. They took down our old garage safely and left the site cleaner than they found it. Highly recommend their demolition services!", name: 'John D.', location: 'Madison, MS', rating: 5 },
  { quote: "Fast, professional, and fair pricing. They removed a massive oak tree that was dangerously close to our house. The entire process was seamless. A+ service.", name: 'Sarah P.', location: 'Brandon, MS', rating: 5 },
  { quote: "We needed our lot cleared for a new build, and these guys were phenomenal. They handled everything from trees to concrete. Very communicative and hardworking.", name: 'Mark T.', location: 'Jackson, MS', rating: 5 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex items-center" aria-label={`Rating: ${rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-6 h-6 ${i < rating ? 'text-brand-gold' : 'text-gray-300'}`} />
            ))}
        </div>
    );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold">What Our Clients Say</h2>
          <p className="mt-2 text-lg text-gray-300">Our reputation is built on satisfied customers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-brand-gray p-8 rounded-lg shadow-lg flex flex-col">
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 text-lg italic flex-grow">"{testimonial.quote}"</blockquote>
              <footer className="mt-6 font-headline font-bold text-right">
                — {testimonial.name}, <span className="text-gray-500">{testimonial.location}</span>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
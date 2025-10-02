import React from 'react';

const Contact = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="contact" className="py-20 bg-brand-gray text-white" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-headline font-bold">Ready to Start Your Project?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
          Call us today for a fast, friendly estimate or to discuss your project needs. We're here to help.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-brand-blue p-6 rounded-lg">
                <h3 className="text-xl font-headline text-brand-gold">Office Phone</h3>
                <a href="tel:469-907-4920" className="text-2xl font-bold hover:underline">(469) 907-4920</a>
            </div>
             <div className="bg-brand-blue p-6 rounded-lg">
                <h3 className="text-xl font-headline text-brand-gold">Cell Phone</h3>
                <a href="tel:601-937-8822" className="text-2xl font-bold hover:underline">(601) 937-8822</a>
            </div>
            <div className="bg-brand-blue p-6 rounded-lg md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-headline text-brand-gold">Hours</h3>
                <p className="text-xl font-semibold">Mon - Sat: 8:00 AM - 6:00 PM</p>
                <p className="text-lg">Sunday: Closed</p>
            </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
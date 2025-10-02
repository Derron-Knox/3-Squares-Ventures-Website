
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import OurProcess from './components/OurProcess';
import Gallery from './components/Gallery';
import ServiceAreas from './components/ServiceAreas';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const quoteFormRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const whyChooseUsRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleScrollTo = (ref: React.RefObject<HTMLElement | HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        onGetQuoteClick={() => handleScrollTo(quoteFormRef)}
        onServicesClick={() => handleScrollTo(servicesRef)}
        onProjectsClick={() => handleScrollTo(galleryRef)}
        onAboutClick={() => handleScrollTo(whyChooseUsRef)}
        onContactClick={() => handleScrollTo(contactRef)}
      />
      <main>
        <Hero onGetQuoteClick={() => handleScrollTo(quoteFormRef)} />
        <Services ref={servicesRef} onGetQuoteClick={() => handleScrollTo(quoteFormRef)} />
        <WhyChooseUs ref={whyChooseUsRef} />
        <OurProcess />
        <Gallery ref={galleryRef} />
        <ServiceAreas />
        <Testimonials />
        <Faq />
        <QuoteForm ref={quoteFormRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
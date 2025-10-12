import React, { useState, useEffect, useRef } from 'react';
import { PhoneIcon, MenuIcon, XIcon } from './ui/Icon';
import Button from './ui/Button';
import siteData from '../content/data/siteData.json';

interface HeaderProps {
  onGetQuoteClick: () => void;
  onServicesClick: () => void;
  onProjectsClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

const NavLink: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => (
  <button onClick={onClick} className="font-semibold uppercase tracking-wider text-sm hover:text-brand-gold transition-colors py-2">
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ 
  onGetQuoteClick, 
  onServicesClick,
  onProjectsClick,
  onAboutClick,
  onContactClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';

      const menuNode = mobileMenuRef.current;
      if (!menuNode) return;
      
      const focusableElements = Array.from(menuNode.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      ));

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // FIX: Use a type guard to ensure the element is an HTMLElement before calling focus.
      if (firstElement instanceof HTMLElement) {
        firstElement.focus();
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) { // Shift+Tab
            if (document.activeElement === firstElement) {
              // FIX: Use a type guard to ensure the element is an HTMLElement before calling focus.
              if (lastElement instanceof HTMLElement) {
                lastElement.focus();
              }
              e.preventDefault();
            }
          } else { // Tab
            if (document.activeElement === lastElement) {
              // FIX: Use a type guard to ensure the element is an HTMLElement before calling focus.
              if (firstElement instanceof HTMLElement) {
                firstElement.focus();
              }
              e.preventDefault();
            }
          }
        }
      };
      
      menuNode.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.body.style.overflow = 'auto';
        menuNode.removeEventListener('keydown', handleKeyDown);
        menuButtonRef.current?.focus();
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleMobileLinkClick = (scrollFunc: () => void) => {
    scrollFunc();
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <header className="bg-brand-gray text-white sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="flex-shrink-0" aria-label="3 Squares Ventures LLC Home">
            <img src="/images/3SquaresVenturesLLCLogo.png" alt="3 Squares Ventures LLC Logo" className="h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 mx-auto" aria-label="Main navigation">
            <NavLink onClick={onServicesClick}>Services</NavLink>
            <NavLink onClick={onProjectsClick}>Projects</NavLink>
            <NavLink onClick={onAboutClick}>About Us</NavLink>
            <NavLink onClick={onContactClick}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href={siteData.phone1.href} className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <PhoneIcon />
              <span className="font-semibold">{siteData.phone1.display}</span>
            </a>
            <a href={siteData.phone2.href} className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <PhoneIcon />
              <span className="font-semibold">{siteData.phone2.display}</span>
            </a>
            <Button onClick={onGetQuoteClick}>
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(true)} 
              aria-label="Open menu" 
              aria-controls="mobile-menu"
              aria-haspopup="true"
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        role="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-heading"
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-brand-gray shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <h2 id="mobile-menu-heading" className="text-white font-headline text-lg">Menu</h2>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              aria-label="Close menu" 
              className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <XIcon />
            </button>
        </div>

        <nav className="flex flex-col items-center gap-4 p-6 text-white">
          <NavLink onClick={() => handleMobileLinkClick(onServicesClick)}>Services</NavLink>
          <NavLink onClick={() => handleMobileLinkClick(onProjectsClick)}>Projects</NavLink>
          <NavLink onClick={() => handleMobileLinkClick(onAboutClick)}>About Us</NavLink>
          <NavLink onClick={() => handleMobileLinkClick(onContactClick)}>Contact</NavLink>
          <div className="border-t border-gray-600 w-full my-4"></div>
          <a href={siteData.phone1.href} className="flex items-center gap-2 hover:text-brand-gold transition-colors text-lg">
            <PhoneIcon />
            <span className="font-semibold">{siteData.phone1.display}</span>
          </a>
          <a href={siteData.phone2.href} className="flex items-center gap-2 hover:text-brand-gold transition-colors text-lg">
            <PhoneIcon />
            <span className="font-semibold">{siteData.phone2.display}</span>
          </a>
          <Button onClick={() => handleMobileLinkClick(onGetQuoteClick)} className="w-full mt-4">
            Get a Free Quote
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;
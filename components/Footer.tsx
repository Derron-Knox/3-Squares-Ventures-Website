
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-8 text-center">
        {/* TODO: Create Privacy Policy and Terms of Service pages and update these links */}
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
        <p>&copy; {currentYear} 3 Squares Ventures LLC. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

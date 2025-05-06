
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-ishraq font-bold text-2xl md:text-3xl">
              <span className="flex items-center">
                <img 
                  src="/lovable-uploads/0a9c5014-aa0e-43ae-b462-bdd5ca96d7e4.png" 
                  alt="شعار شركة إشراق" 
                  className="h-12 mr-2"
                />
                <span className="hidden md:inline text-ishraq">إشراق للرعاية الطبية</span>
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <a href="#about" className="text-ishraq hover:text-ishraq-dark transition-colors">من نحن</a>
            <a href="#services" className="text-ishraq hover:text-ishraq-dark transition-colors">خدماتنا</a>
            <a href="#why-us" className="text-ishraq hover:text-ishraq-dark transition-colors">لماذا نحن</a>
            <a href="#contact" className="text-ishraq hover:text-ishraq-dark transition-colors">اتصل بنا</a>
          </nav>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-ishraq p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto py-2 px-4">
            <nav className="flex flex-col space-y-4 py-2">
              <a href="#about" className="text-ishraq text-lg py-2" onClick={toggleMenu}>من نحن</a>
              <a href="#services" className="text-ishraq text-lg py-2" onClick={toggleMenu}>خدماتنا</a>
              <a href="#why-us" className="text-ishraq text-lg py-2" onClick={toggleMenu}>لماذا نحن</a>
              <a href="#contact" className="text-ishraq text-lg py-2" onClick={toggleMenu}>اتصل بنا</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

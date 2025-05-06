
import React from 'react';
import IshraqLogo from './IshraqLogo';

const Hero = () => {
  return (
    <section className="relative bg-ishraq text-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex justify-end">
              <IshraqLogo className="h-32 w-auto mb-6" />
            </div>
          </div>
          <div className="md:w-1/2 text-right">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-ishraq-gold">إشراق</span> للخدمات الطبية المنزلية
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              رعايتكـــم مســــؤوليتنا، وراحتــــكم أولويتــــنا
            </p>
            <div className="flex justify-start">
              <a 
                href="#contact" 
                className="bg-ishraq-gold hover:bg-yellow-500 text-ishraq py-2 px-6 md:py-3 md:px-8 rounded-lg font-medium transition-colors duration-300 text-lg"
              >
                تواصل معنا الآن
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-16 left-16 w-64 h-64 bg-ishraq-light rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-16 right-16 w-40 h-40 bg-ishraq-gold rounded-full opacity-10 -z-10"></div>
    </section>
  );
};

export default Hero;

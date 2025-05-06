
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import IshraqLogo from './IshraqLogo';

const Footer = () => {
  return (
    <footer className="bg-ishraq text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">عن الشركة</h3>
            <p className="text-gray-300 mb-4">
              شركة إشراق للرعاية الصحية المنزلية، نسعى لتقديم أفضل الخدمات الطبية المنزلية بأعلى معايير الجودة.
            </p>
            <div className="flex space-x-4 space-x-reverse justify-end">
              <a href="#" className="bg-white text-ishraq p-2 rounded-full hover:bg-ishraq-gold hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white text-ishraq p-2 rounded-full hover:bg-ishraq-gold hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white text-ishraq p-2 rounded-full hover:bg-ishraq-gold hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white text-ishraq p-2 rounded-full hover:bg-ishraq-gold hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">معلومات التواصل</h3>
            <ul className="space-y-2">
              <li className="flex justify-end gap-2 items-center">
                <span>رقم التليفون</span>
                <span className="text-ishraq-gold">●</span>
              </li>
              <li className="flex justify-end gap-2 items-center">
                <span>العنـــــوان</span>
                <span className="text-ishraq-gold">●</span>
              </li>
              <li className="flex justify-end gap-2 items-center">
                <span>البريد الإلكتروني</span>
                <span className="text-ishraq-gold">●</span>
              </li>
              <li className="flex justify-end gap-2 items-center">
                <span>الموقع الإلكتروني</span>
                <span className="text-ishraq-gold">●</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-end">
            <IshraqLogo className="h-32 w-auto" />
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">
            جميع الحقوق محفوظة © شركة إشراق للرعاية الطبية {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

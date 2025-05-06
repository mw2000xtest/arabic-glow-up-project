
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact" className="py-16 bg-ishraq-beige">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-ishraq-gold mb-10 text-right">تواصل معنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-ishraq mb-6 text-right">معلومات الاتصال</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="ml-4 mt-1 bg-ishraq text-white p-2 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-right">رقم الهاتف</h4>
                  <p className="text-gray-700 text-right" dir="ltr">+966 12 345 6789</p>
                  <p className="text-gray-700 text-right" dir="ltr">+966 12 345 6780</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="ml-4 mt-1 bg-ishraq text-white p-2 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-right">البريد الإلكتروني</h4>
                  <p className="text-gray-700 text-right" dir="ltr">info@ishraq-care.com</p>
                  <p className="text-gray-700 text-right" dir="ltr">support@ishraq-care.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="ml-4 mt-1 bg-ishraq text-white p-2 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-right">العنوان</h4>
                  <p className="text-gray-700 text-right">
                    شارع الملك فهد، حي السلامة،
                    <br /> 
                    جدة، المملكة العربية السعودية
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="ml-4 mt-1 bg-ishraq text-white p-2 rounded-full">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-right">ساعات العمل</h4>
                  <p className="text-gray-700 text-right">
                    السبت - الخميس: 9:00 صباحاً - 9:00 مساءً
                    <br />
                    الجمعة: 2:00 ظهراً - 9:00 مساءً
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-ishraq mb-6 text-right">أرسل رسالة</h3>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-right font-medium text-gray-700">الاسم الكامل</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ishraq"
                  placeholder="أدخل اسمك الكامل" 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-right font-medium text-gray-700">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ishraq"
                  placeholder="أدخل بريدك الإلكتروني" 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 text-right font-medium text-gray-700">رقم الهاتف</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ishraq"
                  placeholder="أدخل رقم هاتفك" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-right font-medium text-gray-700">الرسالة</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ishraq"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-ishraq text-white font-medium py-3 px-6 rounded-lg hover:bg-ishraq-gold transition-colors duration-300"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

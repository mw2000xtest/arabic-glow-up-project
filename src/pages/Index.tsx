
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutCompany from '../components/AboutCompany';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutCompany />
      <Services />
      <WhyUs />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;

import React from 'react';
import ExceptionalCare from '../../Components/HomePage/ExceptionalCare';
import ContactUs from '../../Components/HomePage/ContactUs';
import FeatureCards from '../../Components/HomePage/FeatureCards';
import HeroSection from '../../Components/HomePage/HeroSection';
import MakeAppointment from '../../Components/HomePage/MakeAppointment';
import OurBlog from '../../Components/HomePage/OurBlog';
import OurDoctors from '../../Components/HomePage/Ourdoctors';
import Services from '../../Components/HomePage/Services';
import Testimonial from '../../Components/HomePage/Testimonial';
import Footer from '../../Components/Shared/Footer/Footer';
import Navbar from '../../Components/Shared/Navbar/Navbar'
import './Home.scss';

function Home() {
  return (
    <div className='container-fluid home-container'>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <Services />
      <ExceptionalCare />
      <MakeAppointment />
      <Testimonial />
      <OurBlog />
      <OurDoctors />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;

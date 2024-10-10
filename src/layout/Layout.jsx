import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Service from '../components/Service/Service';
import About from '../components/About/About';
import Courses from '../components/Course/Courses';
import Event from '../components/Event/Event';
import Features from '../components/Features/Features';
import Team from '../components/Team/Team';
import Testimonial from '../components/Testimonial/Testimonial';
import Accreditation from '../components/Accreditation/Accreditation';
import TopStudyDestination from '../components/TopDestination/TopDestination';
import Footer from '../components/Footer/Footer';
import './Layout.css';

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      {/* Render sections only for the home route */}
      {location.pathname === '/' && (
        <>
          <section id="home">
            <Home />
          </section>
          <section id="service">
            <Service />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="destination">
            <TopStudyDestination />
          </section>
          <section id="courses">
            <Courses />
          </section>
          <section id="event">
            <Event />
          </section>
          <section id="features">
            <Features />
          </section>
          <section id="team">
            <Team />
          </section>
          <section id="testimonials">
            <Testimonial />
          </section>
          <section id="accreditation">
            <Accreditation />
          </section>
        </>
      )}
      {/* Render the footer on all pages */}
      <Footer />
    </div>
  );
};

export default Layout;
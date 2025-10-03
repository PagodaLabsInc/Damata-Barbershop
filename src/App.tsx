import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServiceTabs } from './components/ServiceTabs';
import { Gallery } from './components/Gallery';
import { Team } from './components/Team';
import { InstagramFeed } from './components/InstagramFeed';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
export function App() {
  return <HelmetProvider>
      <div className="w-full min-h-screen bg-white">
        <SEO />
        <Header />
        <Hero />
        <About />
        <ServiceTabs />
        <Gallery />
        <Team />
        <InstagramFeed />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>;
}
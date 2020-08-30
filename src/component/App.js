import React from 'react';

import { ScrollingProvider } from 'react-scroll-section';

import Header from './header/Header';
import Landing from './landing/Landing';
import About from './about/About';
import Builder from './builder/Builder';
import Features from './features/Features';
import MoreFeatures from './features/MoreFeatures';
import Cta from './cta/Cta';
import Footer from './footer/Footer';

import '../style/app.css';

const App = () => {
  return (
    <ScrollingProvider>
      <Header />
      <Landing />
      <About />
      <Builder />
      <Features />
      <MoreFeatures />
      <Cta />
      <Footer />
    </ScrollingProvider>
  );
};

export default App;

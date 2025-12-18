import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Expertise from './components/sections/Expertise';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

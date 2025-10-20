import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/Menu';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Events />
      <Testimonials />
      <Reservation />
      <Footer />
    </div>
  );
};

export default App;
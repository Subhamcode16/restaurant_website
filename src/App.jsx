import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/Menu';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import './index.css'

const App = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <MenuSection />
        <Events />
        <Testimonials />
        <Reservation />
        <Footer />
      </main>
    </div>
  );
};

export default App;
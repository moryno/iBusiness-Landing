import './App.css';
import './assets/styles.css';
import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { Products } from './components/products/Products';
import { Testimonial } from './components/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Products />
        <About />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;

import './App.css';
import './assets/styles.css';
import { Home } from './pages/Home';
import { ProductsView } from './pages/ProductsView';
import { Company } from './pages/Company';
import { Support } from './pages/Support';
import { FAQ } from './pages/FAQ';
import { OurStory } from './pages/OurStory';
import { Privacy } from './pages/Privacy';
import { UsageTerms } from './pages/UsageTerms';
import { ProductGuide } from './pages/ProductGuide';
import { SignIn } from './pages/SignIn';
import { Navbar } from './components/navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/company" element={<Company />} />
          <Route path="/support" element={<Support />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/usage-terms" element={<UsageTerms />} />
          <Route path="/product-guide" element={<ProductGuide />} />
          <Route path="/get-started" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

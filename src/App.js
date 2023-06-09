import './App.css';
import './assets/styles.css';
import { Home } from './pages/Home';
import { ProductsView } from './pages/ProductsView';
import { Company } from './pages/Company';
import { Support } from './pages/Support';
import { SignUp } from './pages/GetStarted';
import { SignIn } from './pages/SignIn';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/navbar/Navbar';
import { Copyright } from './components/copyright/Copyright';
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
          <Route path="/get-started" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Copyright />
      </BrowserRouter>
    </div>
  );
}

export default App;

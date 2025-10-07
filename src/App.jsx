import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Footer from './components/footer';
import MainPage from './components/MainPage';
import ContactPage from './components/ContactPage';
import CiphersPage from './components/CiphersPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ciphers" element={<CiphersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


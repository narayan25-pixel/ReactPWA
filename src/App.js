import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import AboutPage from './Pages/About/AboutPage';
import ContactPage from './Pages/Contact/ContactPage';
import ServicePage from './Pages/Services/ServicePage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<AboutPage/>} />
    <Route path="contact" element={<ContactPage/>} />
    <Route path="services" element={<ServicePage/>}/>
    </Routes>
  );
}

export default App;

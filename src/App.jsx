import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FrontPage from "./Home/FrontPage";
import AboutPage from "./About/AboutPage";
import ContactPage from "./Contact/ContactPage";
import LocationPage from "./Locations/LocationPage";
import WebDesign from "./Projects/Web Design/WebDesign";
import AppDesign from "./Projects/App Design/AppDesign";
import GraphicDesign from "./Projects/Graphic Design/GraphicDesign";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/web-design" element={<WebDesign />} />
        <Route path="/projects/app-design" element={<AppDesign />} />
        <Route path="/projects/graphic-design" element={<GraphicDesign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Loader from "./components/Loader";

// Loadable components
const Header = loadable(() => import("./components/Header/Header"), {
  fallback: <Loader />,
});
const HeroSection = loadable(() => import("./components/Hero-Section/HeroSection"), {
  fallback: <Loader />,
});
const CompanySection = loadable(() => import("./components/Company-section/Company"), {
  fallback: <Loader />,
});
const AboutUs = loadable(() => import("./components/About-us/AboutUs"), {
  fallback: <Loader />,
});
const ChooseUs = loadable(() => import("./components/Choose-us/ChooseUs"), {
  fallback: <Loader />,
});
const Features = loadable(() => import("./components/Feature-section/Features"), {
  fallback: <Loader />,
});
const FreeCourse = loadable(() => import("./components/Free-course-section/FreeCourse"), {
  fallback: <Loader />,
});
const Testimonials = loadable(() => import("./components/Testimonial/Testimonials"), {
  fallback: <Loader />,
});
const Newsletter = loadable(() => import("./components/Newsletter/Newsletter"), {
  fallback: <Loader />,
});
const Footer = loadable(() => import("./components/Footer/Footer"), {
  fallback: <Loader />,
});
const LoginModal = loadable(() => import("./components/Login/index.js"), {
  fallback: <Loader />,
});

// Home component that includes all sections
const Home = () => (
  <>
    <HeroSection />
    <CompanySection />
    <AboutUs />
    <ChooseUs />
    <Features />
    <FreeCourse />
    <Testimonials />
  </>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Route - displays all sections */}
        <Route path="/" element={<Home />} />
        
        {/* Individual Routes for each section */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/choose-us" element={<ChooseUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/free-course" element={<FreeCourse />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/newsletter" element={<Newsletter />} />
        
        {/* Route for Login */}
        <Route path="/login" element={<LoginModal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

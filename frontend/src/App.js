import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Loader from "./components/Loader";
import HomeLayout from "./components/HomeLyout.js";
import DashboardLayout from "./components/DashBoardLayout.js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Loadable components
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
const LoginModal = loadable(() => import("./components/Login/index.js"), {
  fallback: <Loader />,
});
const Dashboard = loadable(() => import("./components/Dashboard/dashboard.js"), {
  fallback: <Loader />,
});


const LayoutWithHeaderFooter = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Layout Route - loads full HomeLayout */}
        <Route path="/" element={<HomeLayout />} />
      
        <Route path="/about-us" element={<LayoutWithHeaderFooter><AboutUs /></LayoutWithHeaderFooter>} />
        <Route path="/choose-us" element={<LayoutWithHeaderFooter><ChooseUs /></LayoutWithHeaderFooter>} />
        <Route path="/features" element={<LayoutWithHeaderFooter><Features /></LayoutWithHeaderFooter>} />
        <Route path="/free-course" element={<LayoutWithHeaderFooter><FreeCourse /></LayoutWithHeaderFooter>} />
        <Route path="/testimonials" element={<LayoutWithHeaderFooter><Testimonials /></LayoutWithHeaderFooter>} />
        <Route path="/newsletter" element={<LayoutWithHeaderFooter><Newsletter /></LayoutWithHeaderFooter>} />
        <Route path="/login" element={<LayoutWithHeaderFooter><LoginModal /></LayoutWithHeaderFooter>} />

       
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

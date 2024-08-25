import React, { Fragment, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import Loader from "./components/Loader"; // Updated path
import Header from "./components/Header/Header"; // Updated path
import HeroSection from "./components/Hero-Section/HeroSection"; // Updated path
import CompanySection from "./components/Company-section/Company"; // Updated path
import AboutUs from "./components/About-us/AboutUs"; // Updated path
import ChooseUs from "./components/Choose-us/ChooseUs"; // Updated path
import Features from "./components/Feature-section/Features"; // Updated path
import FreeCourse from "./components/Free-course-section/FreeCourse"; // Updated path
import Testimonials from "./components/Testimonial/Testimonials"; // Updated path
import Newsletter from "./components/Newsletter/Newsletter"; // Updated path
import Footer from "./components/Footer/Footer"; // Updated path

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Suspense fallback={<Loader />}>
          <Header />
          <HeroSection />
          <CompanySection />
          <AboutUs />
          <ChooseUs />
          <Features />
          <FreeCourse />
          <Testimonials />
          {/* <Newsletter /> */}
          <Footer />
        </Suspense>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

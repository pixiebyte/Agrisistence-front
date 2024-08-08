import React, { useState, useEffect } from "react";
import { Navigation } from "../components/Landing/navigation";
import { Header } from "../components/Landing/header";
import { Features } from "../components/Landing/features";
import { About } from "../components/Landing/about";
import { Services } from "../components/Landing/services";
import { Gallery } from "../components/Landing/gallery";
import { Testimonials } from "../components/Landing/testimonials";
import { Team } from "../components/Landing/Team";
import { Contact } from "../components/Landing/contact";
import JsonData from "../components/data/data.json";
import SmoothScroll from "smooth-scroll";
import "../Styles/components/Landing.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

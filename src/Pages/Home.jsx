import React, { useEffect, useState } from "react";
import Container from "../Containers/Container";
import Hero from "../Sections/HomePage/Hero";
import AboutMe from "../Sections/HomePage/AboutMe";
import Services from "../Sections/HomePage/Services";
import MyProjects from "../Sections/HomePage/MyProjects";
import ContactMe from "../Sections/HomePage/ContactMe";
import Footer from "../Components/Footer";
import Testimonial from "../Sections/HomePage/Testimonial";
import NavBar from "../Components/NavBar";
// dark:bg-[#1E1E1E]
const Home = () => {
  const [mode, setMode] = useState("day");

  useEffect(() => {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (userPrefersDark) {
      setMode("dark");
    } else {
      setMode("day");
    }

  
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setMode(e.matches ? "dark" : "day");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);



  return (
    <div
      className={`bg-bodyBg ${
        mode === "day" ? "light" : "darkThem"
      } dark:darkThem transition-all duration-1000`}
    >
      <Container>
        <NavBar mode={mode} setMode={setMode} />
        <Hero />
        <AboutMe />
        <Services />
        <MyProjects />
        <Testimonial />
        <ContactMe />
        <Footer mode={mode} />
      </Container>
    </div>
  );
};

export default Home;

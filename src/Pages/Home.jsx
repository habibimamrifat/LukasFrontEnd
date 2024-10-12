import React from "react";
import Container from "../Containers/Container";
import Hero from "../Sections/HomePage/Hero";
import AboutMe from "../Sections/HomePage/AboutMe";
import Services from "../Sections/HomePage/Services";
import MyProjects from "../Sections/HomePage/MyProjects";
import ContactMe from "../Sections/HomePage/ContactMe";
import Footer from "../Components/Footer";
import Testimonial from "../Sections/HomePage/Testimonial";
import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <div className="dark:bg-[#1E1E1E]">
      <Container>
        <NavBar />
        <Hero />
        <AboutMe />
        <Services />
        <MyProjects />
        <Testimonial />
        <ContactMe />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;

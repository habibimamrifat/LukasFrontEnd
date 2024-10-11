import React from "react";
import Container from "../Containers/Container";
import { ChangeOnCLickButton, OrangeButton } from "../Components/AllButton";
import CustomProgressBar from "../Components/CustomProgressBar";
import Hero from "../Sections/HomePage/Hero";
import AboutMe from "../Sections/HomePage/AboutMe"
import Services from "../Sections/HomePage/Services";
import MyProjects from "../Sections/HomePage/MyProjects";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero/>
        <AboutMe/>
        <Services/>
        <MyProjects/>
      </Container>
    </div>
  );
};

export default Home;

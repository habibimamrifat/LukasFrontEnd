import React from "react";
import Container from "../Containers/Container";
import { ChangeOnCLickButton, OrangeButton } from "../Components/AllButton";
import CustomProgressBar from "../Components/CustomProgressBar";
import Hero from "../Sections/HomePage/Hero";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero/>
      </Container>
    </div>
  );
};

export default Home;

import React from "react";
import Container from "../Containers/Container";
import { ChangeOnCLickButton, OrangeButton } from "../Components/AllButton";

const Home = () => {
  return (
    <div>
      <Container>
        <OrangeButton innerText={"Download CV"} />
      </Container>

      <ChangeOnCLickButton
      innerText={"onclick change"}
      />
    </div>
  );
};

export default Home;

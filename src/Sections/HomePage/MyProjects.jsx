import React, { useState } from "react";
import { HMediumText, NormalText } from "../../Components/AllTextType";
import { ChangeOnCLickButton } from "../../Components/AllButton";
import ProjectCards from "../../Components/ProjectCards";

const MyProjects = () => {
  const [selectedButton, setSelectedButton] = useState("All");
  const catagories = [
    "All",
    "UI/UX",
    "Web Design",
    "App Design",
    "Graphic Design",
  ];

  return (
    <div className="mt-[135px]">
      <div className="text-center">
        <HMediumText innerText={"My Projects"} />
        <div className="mt-[35px]">
          <NormalText
            innerText={
              "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
            }
          />
        </div>

        <div className="mt-[65px]">
          <div className="w-full flex gap-5 justify-center">
            {catagories.map((catagory, index) => (
              <ChangeOnCLickButton
                innerText={catagory}
                id={catagory}
                selectedButton={selectedButton}
                setSelectedButton={setSelectedButton}
                key={index}
              />
            ))}
          </div>
        </div>

        <div>
          <ProjectCards/>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;

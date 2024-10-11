import React, { useEffect, useState } from "react";
import { HMediumText, NormalText } from "../../Components/AllTextType";
import { ChangeOnCLickButton } from "../../Components/AllButton";
import ProjectCards from "../../Components/ProjectCards";
import img0 from "../../assets/webPics/Web Designs.png";
import img1 from "../../assets/webPics/Web Designs (1).png";
import img2 from "../../assets/webPics/Web Designs (2).png";
import img3 from "../../assets/webPics/Web Designs (3).png";
import img4 from "../../assets/webPics/Web Designs (4).png";
import img5 from "../../assets/webPics/Web Designs (5).png";

const MyProjects = () => {
  const [selectedButton, setSelectedButton] = useState("All");
  const [showProject, setShowProject] = useState([]);

  const catagories = [
    "All",
    "UI/UX",
    "Web Design",
    "App Design",
    "Graphic Design",
  ];
  const allProjects = [
    {
      catagory: "UI/UX",
      projects: [
        {
          projectName: "AirCalling Landing Page Design ",
          img1: img0,
          img2: img1,
        },
        {
          projectName: "AirCalling Landing Page Design ",
          img1: img2,
          img2: img3,
        },
        {
          projectName: "AirCalling Landing Page Design ",
          img1: img4,
          img2: img5,
        },
      ],
    },
    {
      catagory: "Web Design",
      projects: [
        {
          projectName: "AirCalling Landing Page Design ",
          img1: img0,
          img2: img1,
        },
        {
          projectName: "AirCalling Landing Page Design ",
          img1: img2,
          img2: img3,
        },
      ],
    },
    {
      catagory: "App Design",
      projects: [
        {
          projectName: "AirCalling Landing Page Design ",
          img1: img2,
          img2: img3,
        },
        {
          projectName: "AirCalling Landing Page Design ",
          img1: img4,
          img2: img5,
        },
      ],
    },
    {
      catagory: "Graphic Design",
      projects: [
        {
          projectName: "AirCalling Landing Page Design ",
          img1: img0,
          img2: img1,
        },
        {
          projectName: "AirCalling Landing Page Design ",
          img1: img4,
          img2: img5,
        },
      ],
    },
  ];

  useEffect(() => {
    if (selectedButton !== "All") {
      allProjects.map((project) => {
        if (project.catagory === selectedButton) {
          setShowProject(project?.projects);
        }
      });
    } else {
      const viewProjectList = [];
      allProjects.map((project) => {
        viewProjectList.push(...project.projects);
      });
      setShowProject(viewProjectList);
    }
  }, [selectedButton]);

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

        <div className="flex flex-wrap gap-11 justify-center">
          {showProject.map((eachProject, index) => (
            <div key={index}>
              <ProjectCards />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;

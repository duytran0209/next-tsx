import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import design from "../images/design.svg";
import intelligence from "../images/intelligence.svg";
import gamedev from "../images/game-dev.svg";

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Title title={"Services"} span={"services"}></Title>
        <div className="services">
          <ServiceCard
            image={design}
            title={"HTML3, CSS5"}
            paragraph={
              "Bootstrap 5, SCSS, Tailwind CSS, CSS module, Styled Components ...  "
            }
          ></ServiceCard>

          <ServiceCard
            image={intelligence}
            title={"React JS"}
            paragraph={
              "Javascript ES6, Typescript, React Hook, Redux Toolkit, Redux Saga , NextJS ... "
            }
          ></ServiceCard>

          <ServiceCard
            image={gamedev}
            title={"Other Skills"}
            paragraph={
              "Github, Vercel, VSCode, Figma, Jira, Trello, Firebase, PSD to HTML, Office Skills..."
            }
          ></ServiceCard>
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;

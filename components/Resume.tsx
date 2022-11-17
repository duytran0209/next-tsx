import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ResumeItem from "./ResumeItem";
import SmallTitle from "./SmallTitle";
import Title from "./Title";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        <div className="small-title ">
          <SmallTitle icon={briefcase} title={"Educational Qualifications"} />
        </div>

        <div
          className="resume-content"
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <ResumeItem
            year={"2019"}
            title={"E-commerce"}
            subTitle={"Vietnam National University"}
            text={
              "Final year student majoring in e-commerce, Vietnam National University."
            }
          />

          <ResumeItem
            year={"2021"}
            title={"HTML5, CSS3 web programming course jQuery, Bootstrap"}
            subTitle={"University of Sciences Informatics Center"}
            text={
              "Learning the knowledge of Javascript ES6, Bootstrap, Responsive Web Design (RWD)."
            }
          />

          <ResumeItem
            year={"2021"}
            title={"React JS Developer Course"}
            subTitle={"ZendVN Training Center for Programmers"}
            text={
              "Learning the knowledge of React JS (react hooks and custom hooks), Redux Toolkit (thunk and saga), CRUD app."
            }
          />
        </div>

        <div className="small-title u-small-title-margin">
          <div className="mb-16">
            <SmallTitle icon={school} title={"Working Experience"} />
          </div>
          <div
            className="resume-content "
            data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <ResumeItem
              year={"05/2022 - 09/2022"}
              title={"Success Software Services"}
              subTitle={"Intern Front-end Developer"}
              text={
                " Participate and learning in projects using technologies such as ReactJs and NextJs, Typescript and Javascript ES6 , Github conventions and Jira. Learn about the working process to complete the product."
              }
            />

            <ResumeItem
              year={"09/2022"}
              title={"Bakco Solutions"}
              subTitle={"Fresher and Freelancer Front-end Developer"}
              text={`Participate in projects using technologies such as ReactJs, Redux Saga, Typescript, Material UI. Learn about the working process to complete the product.`}
            />
          </div>
        </div>
        <div className="small-title ">
          <SmallTitle icon={briefcase} title={"Projects"} />
        </div>

        <div
          className="resume-content"
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <ResumeItem
            year={"07/2022 - 09/2022"}
            title={"ACB bank"}
            subTitle={"Delivery ACB"}
            text={
              "This project is a website where visitors can get details, latest news and payment pages of ACB bank. 8 front-end developers and my responsibilities Trained in the process of participating in the project. Technologies used: ReactJS, Redux Saga, Typescript, Material UI, Adobe XD."
            }
          />

          <ResumeItem
            year={"09/2022 - 11/2022"}
            title={"Ho Chi Minh City Department of Health"}
            subTitle={"Datahub"}
            text={
              "Manage HIV patients information, included: patient list, place of medical treatment, past medical history. Team size: 3 front-end developers, 2 back-end, 1 tester and 1 devops. Technologies used: ReactJS, Redux Saga, Typescript, Material UI, Figma."
            }
          />

          <ResumeItem
            year={"11/2022 "}
            title={"Management system handling of violations Ha Tien city"}
            subTitle={"Ha Tien"}
            text={
              "Monitoring, receiving and handling traffic violations in Ha Tien city. Team size: 6 members. Technologies used: ReactJS, Redux Saga, Typescript, Material UI, Figma."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;

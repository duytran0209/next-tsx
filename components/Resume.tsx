import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import SmallTitle from "./SmallTitle";
import Title from "./Title";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "./ResumeItem";

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
            year={"2019-"}
            title={"E-commerce"}
            subTitle={"University of Economics and Law"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero."
            }
          />

          <ResumeItem
            year={"9-2021"}
            title={"HTML5, CSS3 web programming course jQuery, Bootstrap"}
            subTitle={"University of Sciences Informatics Center"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero."
            }
          />

          <ResumeItem
            year={"2-2022"}
            title={"React JS Developer Course"}
            subTitle={"ZendVN Training Center for Programmers"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero."
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
              year={"6-2022"}
              title={"Success Software Services"}
              subTitle={"Intern Front-end Developer"}
              text={
                " Learn about the working process to complete the product and learning more languages Javascript ES6 and Typescript, ReactJS/Next JS, Redux Tookit, Redux Saga, Redux Thunk, Github and Jira, Firebase, UI/UX, SEO, Call rest API using Postman...."
              }
            />

            <ResumeItem
              year={"2022"}
              title={"The movies search app"}
              subTitle={"ZendVN Center Directions"}
              text={` Languages employed:  CSS (tailwind), Javascript, ReactJS and SWR. Languages employed:  CSS (tailwind), Javascript, ReactJS and SWR. As a result, make a simple movie watching website. Demo: https://moviesearchapp0209.netlify.app/. Github: https://github.com/duytran0209/movieapp`}
            />

            <ResumeItem
              year={"2022"}
              title={"Admin Jobs"}
              subTitle={"Self-improvement"}
              text={
                " Languages employed: Styled component, Redux toolkit (redux thunk), Typescript and Javascript ES6. Languages employed: Styled component, Redux toolkit (redux thunk), Typescript and Javascript ES6. Demo: https://jobadmin0209.vercel.app. Github: https://github.com/duytran0209/dashboardmanagement"
              }
            />
          </div>
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

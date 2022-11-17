import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

const ReviewSection = () => {
  return (
    <ReviewsStyled
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <Title title={"ACTIVITIES"} span={"ACTIVITIES"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Participating in a research project at the Economics Falcuty  "
            }
          />

          <ReviewItem
            text={
              "Math, physics and chemistry tutoring for 12th grade students at Tien Phong and Ong Mat Troi tutoring center."
            }
          />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
};

const ReviewsStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
`;

export default ReviewSection;

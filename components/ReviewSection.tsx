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
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Novices can learn from experienced developers through code reviews  "
            }
          />

          <ReviewItem
            text={
              "Allow to keep sharing and updating the knowledge within the team"
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

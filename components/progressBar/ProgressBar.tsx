import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface ProgressBarProps {
  width: number | string;
}
const ProgressBarStyled = styled.div<ProgressBarProps>`
  .progressMainWrapper {
    background-color: #ffffff;
    height: 5px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
  }

  .progressMainStyle {
    height: 5px;
    /* background-image: linear-gradient(to bottom, #ffa400, #00aefd); */
    background-color: ${(props) => props.theme.primary};

    width: ${(props) => props.width};
  }
`;
const ProgressBar: React.FC = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ProgressBarStyled width={""}>
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{
            width: `${scrollTop}%`,
          }}
        ></div>
      </div>
    </ProgressBarStyled>
  );
};

export default ProgressBar;

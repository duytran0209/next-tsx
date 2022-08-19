import React from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useState from "react";

const ScrollToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTopButton && (
        <ScrollToTopStyled onClick={scrollUp}>
          <ArrowUpwardIcon />
        </ScrollToTopStyled>
      )}
    </>
  );
};

const ScrollToTopStyled = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  font-size: 50px;
  background-color: var(--primary-color);
  border-radius: 100rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    font-weight: 800;
  }
`;

export default ScrollToTop;

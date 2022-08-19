import { css } from "styled-components";
export const GlobalClasses = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  body {
    font-size: 16px;
    font-family: "Inter", sans-serif;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    outline: none;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  /* h2,
  h3,
  h4 {
    font-weight: bold;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 26px;
  }
  h4 {
    font-size: 22px;
  }
  p {
    margin-bottom: 20px;
    line-height: 2;
  } */

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.primary};

    border-radius: 100rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

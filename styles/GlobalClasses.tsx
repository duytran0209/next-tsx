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
    font-family: "Epilogue", sans-serif;
    font-size: 16px;
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
  h2,
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
  }

  ul {
    list-style-type: disc;
  }
  ol {
    list-style: decimal;
  }
  ul,
  ol {
    margin-bottom: 20px;
    padding-left: 40px;
    margin-left: 0;
    li {
      margin-bottom: 10px;
    }
  }
  img {
    border-radius: 8px;
    margin-bottom: 30px;
  }

  body::-webkit-scrollbar {
    width: 9px;
    background-color: #383838;
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #6b6b6b;
  }

  body::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #383838;
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

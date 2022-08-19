import React from "react";
import styled from "styled-components";

interface LabelProps {
  children?: string;
  htmlFor: string;
}

const LabelStyles = styled.label<LabelProps>`
  color: ${(props) => props.theme.gray4b};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

const Label: React.FC<LabelProps> = ({ htmlFor = "", children, ...props }) => {
  return (
    <LabelStyles htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyles>
  );
};

export default Label;

import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

interface InputProps {
  name: string;
  type: string;
  children?: string;
  control?: any;
  placeholder?: string;
  id: string;
}

export const Input: React.FC<InputProps> = ({
  id = "",
  name = "",
  type = "text",
  children,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name: name,
    defaultValue: "",
  });
  return (
    <InputStyled>
      <input id={name} type={type} {...field} {...props} />
    </InputStyled>
  );
};

const InputStyled = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: 16px 20px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.graylight}; // grayLight: "#E7ECF3"
    border-radius: 8px;
    transition: all 0.2s linear;
    color: ${(props) => props.theme.black}; //black: '#171725'
    font-size: 16px;
    font-weight: 600;
  }
  input::-webkit-input-placeholder {
    color: #b2b3bd;
  }
  input::-moz-input-placeholder {
    color: #b2b3bd;
  }
`;

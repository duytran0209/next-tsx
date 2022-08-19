import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  kind?: "primary" | "secondary" | "tertiary" | "ghost";
  height?: number | string;
  width?: number | string;

  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick = () => {},
  children,
  kind = "primary",
  href = "",
  isLoading = false,
  ...props
}) => {
  const child = !!isLoading ? <LoadingSpinner /> : children;
  if (href !== "" && typeof href === "string") {
    return (
      <Link
        href={href}
        style={{
          display: "inline-block",
        }}
      >
        <ButtonStyled
          type={type}
          kind={kind}
          onClick={onClick}
          isLoading={isLoading}
          {...props}
        >
          {children}
        </ButtonStyled>
      </Link>
    );
  }
  //* Nếu to là string rỗng hoặc kiểu của nó là string trả về kết quả là 1 navlink để bấm nó sang trang khác
  return (
    <ButtonStyled
      type={type}
      kind={kind}
      onClick={onClick}
      isLoading={isLoading}
      {...props}
    >
      {child}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  height: ${(props) => props.height || "66px"};
  width: ${(props) => props.width || "600px"};
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s linear;
  &:hover {
    opacity: 0.8;
  }
  ${(props) =>
    props.kind === "secondary" &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: white;
    `};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background-color: ${(props) => props.theme.primary};
    `};
  ${(props) =>
    props.kind === "ghost" &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: rgba(29, 192, 113, 0.1);
    `};
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export default Button;

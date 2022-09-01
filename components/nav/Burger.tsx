import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

interface BurgerProps {
  open: boolean;
}

const BurgerStyled = styled.div<BurgerProps>`
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: no-wrap;
  }

  div {
    width: 2.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <BurgerStyled open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <RightNav open={open} />
    </>
  );
};

export default Burger;

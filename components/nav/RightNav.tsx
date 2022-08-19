import React from "react";
import styled from "styled-components";
import Link from "next/link";
const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/",
    title: "About Us",
  },
  {
    url: "/",
    title: "Contact Us",
  },
  {
    url: "/",
    title: "Sign In",
  },
  {
    url: "/",
    title: "Sign Up",
  },
];

interface RightNavProps {
  open: boolean;
}

const MenuStyled = styled.ul<RightNavProps>`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0 30px;
  li {
    padding: 18px 10px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      text-align: center;
    }
  }
`;

const RightNav: React.FC<RightNavProps> = ({ open }) => {
  return (
    <MenuStyled open={open}>
      {menuLinks.map((item) => (
        <li className="menu-item" key={item.title}>
          <Link className="menu-link" href={item.url}>
            <a> {item.title} </a>
          </Link>
        </li>
      ))}
    </MenuStyled>
  );
};

export default RightNav;

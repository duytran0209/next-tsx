import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import image from "../../images/logo_real.png";
const Nav = styled.nav`
  background-color: ${(props) => props.theme.primary};
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: 10px;
    width: 100px;
    height: 85px;
    cursor: pointer;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link href="/">
          <Image src={image} alt="wobo" />
        </Link>
      </div>
      <Burger />
    </Nav>
  );
};
export default Navbar;

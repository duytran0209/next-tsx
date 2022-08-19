import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: 18px;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Menu</div>
      <Burger />
    </Nav>
  );
};
export default Navbar;

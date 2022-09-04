import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import styled from "styled-components";
import useClickOutSide from "../hooks/useClickOutside";
import Navigation from "./Navigation";

interface SidebarProps {
  children?: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const { navToggle, setNavToggle, nodeRef } = useClickOutSide();

  return (
    <>
      <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
        <Navigation />
        {children}
      </SidebarStyled>
      <div className="ham-burger-menu" ref={nodeRef}>
        <div onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </div>
      </div>
    </>
  );
};

const SidebarStyled = styled.div`
  z-index: 2;
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;

export default Sidebar;

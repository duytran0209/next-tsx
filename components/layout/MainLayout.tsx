import React from "react";
import { LayoutProps } from "../../models/common";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>A</header>

      <main>{children}</main>
      <footer>B</footer>
    </div>
  );
};

export default MainLayout;

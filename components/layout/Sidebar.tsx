import React from "react";
import { LayoutProps } from "../../models/common";
import Sidebar from "../Sidebar";

const SidebarLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Sidebar>
        <main>{children}</main>
      </Sidebar>
    </div>
  );
};

export default SidebarLayout;

import React from "react";
import { LayoutProps } from "../../models/common";
import ScrollToTop from "../scrollTop/ScrollTop";

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

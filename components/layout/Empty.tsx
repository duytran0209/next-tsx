import React from "react";
import { LayoutProps } from "../../models/common";
import ProgressBar from "../progressBar/ProgressBar";
import ScrollToTop from "../scrollTop/ScrollTop";

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <>
      <ProgressBar />
      <ScrollToTop />
      {children}
    </>
  );
}

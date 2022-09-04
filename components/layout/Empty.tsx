import { LayoutProps } from "../../models/common";
import Darkmode from "../darkmode/Darkmode";
import ScrollToTop from "../scrollTop/ScrollTop";
import Sidebar from "../Sidebar";

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />

      <ScrollToTop />
      <Darkmode />
      {children}
    </>
  );
}

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { EmptyLayout } from "../components/layout/Empty";
import { AppPropsWithLayout } from "../models/common";
import "../styles/global.css";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;

import { AppPropsWithLayout } from "../models/common";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/global.css";
import { EmptyLayout } from "../components/layout/Empty";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <SessionProvider>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
export default MyApp;

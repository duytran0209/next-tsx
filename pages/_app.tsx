import { AppPropsWithLayout } from "../models/common";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/global.css";
import { EmptyLayout } from "../components/layout/Empty";
import { SessionProvider } from "next-auth/react";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

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

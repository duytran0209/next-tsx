import { AppPropsWithLayout } from "../models/common";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/constants";
import GlobalStyles from "../styles/GlobalStyles";
import { EmptyLayout } from "../components/layout/empty";
import "../styles/global.css";
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;

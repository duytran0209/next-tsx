import { AppPropsWithLayout } from "../models/common";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/constants";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/global.css";
import { EmptyLayout } from "../components/layout/Empty";
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

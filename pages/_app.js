// import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../components/Header";
import MDXComponents from "../components/MDXComponents";
import { MDXProvider } from "@mdx-js/react";
import { Grid } from "@material-ui/core";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Header />
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;

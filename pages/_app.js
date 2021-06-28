// import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../components/Header";
import MDXComponents from "../components/MDXComponents";
import { MDXProvider } from "@mdx-js/react";
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import SocialFloat from "../components/socialFloat";


function MyApp({ Component, pageProps }) {

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MDXProvider components={MDXComponents}>
        <Header />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;

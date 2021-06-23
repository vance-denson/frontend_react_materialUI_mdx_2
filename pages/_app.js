// import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../components/Header";
import MDXComponents from "../components/MDXComponents";
import { MDXProvider } from "@mdx-js/react";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import SocialFloat from "../components/socialFloat";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//   },
//   socialFloat: {
//     fontSize: "30px",
//     background: "#000",
//   },
// }));

function MyApp({ Component, pageProps }) {
  // const classes = useStyles();
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
        <SocialFloat />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;

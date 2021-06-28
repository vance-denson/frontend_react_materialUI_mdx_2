import { Typography, Grid, Button, makeStyles, Paper } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export default function Blog() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>VND Blog</title>
        <meta name="description" content="Blog of Vance Denson" />
        <link rel="icon" href="/favicon-sm.ico" type="image/x-icon" />
      </Head>
      <Paper className={classes.root}>
        <Grid direction="column" align="center">
          <Typography variant="h4" >
            Blog
          </Typography>
        </Grid>
      </Paper>
    </>
  );
}

// export async function getStaticProps(){
//   //FETCH POSTS

//   return{
//     props: {posts}
//   }
// }

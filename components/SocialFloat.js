/**
 * Static social component
 */
import {
  makeStyles,
  Button,
  Box,
  Grid
} from "@material-ui/core";
import Link from "next/link";
import { GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {

  },
  socialBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "10%",
    width: "10%",
    position: "fixed",
    right: "0",
    top: "15%",
    zIndex: "1",
  },
  socialButtons: {
    background: "rgba(192,111,123,0.8)",
    border: "1px solid black",
  },
}));

export default function SocialFloat() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.socialBox}>
        <Grid item>
          <Link href="https://github.com/vance21017">
            <Button className={classes.socialButtons} startIcon={<GitHub />}>
              GH
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com/in/vance-denson-5a6324b6">
            <Button className={classes.socialButtons} startIcon={<LinkedIn />}>
              LI
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

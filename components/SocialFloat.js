import {
  makeStyles,
  Button,
  Grid,
  Paper,
  Box,
  IconButton,
  Container,
} from "@material-ui/core";
import Link from "next/link";
import { GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  socialBox: {
    height: "20%",
    width: "20%",
    position: "fixed",
    right: "0",
    top: "25%",
    zIndex: "1",
  },
  socialButtons: {
    background: "rgba(0,0,0,0.8)",
  },
}));

export default function SocialFloat() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.socialBox}>
        <Link href="https://github.com/vance21017">
          <Button className={classes.socialButtons} startIcon={<GitHub />}>
            GH
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/vance-denson-5a6324b6">
          <Button className={classes.socialButtons} startIcon={<LinkedIn />}>
            LI
          </Button>
        </Link>
      </Box>
    </>
  );
}

import {
  Toolbar,
  IconButton,
  Typography,
  Grid,
  AppBar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeMenu from "../components/SwipeMenu";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/lobster";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
  },
  headlineText: {
    textAlign: "right",
    fontFamily: "lobster",
    fontWeight: "200",
    fontSize: "2rem",
    color: "#5aff3e",
    textShadow: "1px 1px 2px #000",
  },
  title: {
    alignSelf: "center",
  },
  gridContainer: {},
  appbar: {
    background: "#000",
    position: "sticky",
    top: "0",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Grid container direction="row" className={classes.gridContainer}>
          <Grid item xs={2}>
            <SwipeMenu>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </SwipeMenu>
          </Grid>
          <Grid item xs={10} className={classes.title}>
            <Typography variant="h5" className={classes.headlineText}>
              Vance Denson
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

import {
  Toolbar,
  Divider,
  IconButton,
  Typography,
  Button,
  Grid,
  AppBar,
  useScrollTrigger,
  Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LockOpen from "@material-ui/icons/LockOpen";
import SwipeMenu from "../components/SwipeMenu";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "50vh",
  },
  headlineText: {
    textAlign: "right",
  },
  gridItem: {
    alignSelf: "center",
  },
  gridContainer: {},
  toggle: {
    margin: "0 0 0 3%",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          xs="12"
          className={classes.gridContainer}
        >
          <Grid item xs="2">
            <SwipeMenu>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </SwipeMenu>
          </Grid>
          <Grid item xs="7" className={classes.gridItem}>
            <Typography variant="h5" className={classes.headlineText}>
              Vance Denson
            </Typography>
          </Grid>
          <Grid item xs="2" className={(classes.gridItem, classes.toggle)}>
            {/* <ThemeToggle /> */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

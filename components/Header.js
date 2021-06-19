import {
  Toolbar,
  Divider,
  IconButton,
  Typography,
  Button,
  Grid,
  AppBar,
  useScrollTrigger,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LockOpen from "@material-ui/icons/LockOpen";
import SwipeMenu from "../components/SwipeMenu";
import { makeStyles } from "@material-ui/core/styles";

export default function Header(props) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" xs="10">
            <Grid item xs="2" align="left" justify="center">
              <SwipeMenu>
                <IconButton>
                  <MenuIcon />
                </IconButton>
              </SwipeMenu>
            </Grid>
            <Grid item justify="center" align="center" xs="10">
              <Typography variant="h4" color="primary">
                Welcome to Vance's Site
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spaceing="space-between"
            diection="column"
            xs="2"
            alignContent="flex-end"
          >
            <Grid item>
              <Button variant="outlined" endIcon={<LockOpen />} disabled>
                Login
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="overline">coming soon</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
}

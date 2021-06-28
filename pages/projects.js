import {
  Typography,
  Grid,
  Button,
  Box,
  Checkbox,
  makeStyles,
  Paper,
} from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import { sizing } from "@material-ui/system";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Paper>
        <Grid direction="column" align="center">
          <Typography variant="h4" color="textPrimary">
            Projects
          </Typography>
        </Grid>
        <Box
          height="500px"
          width="200px"
          bgcolor="warning.main"
          color="inherit"
          align="center"
          alignSelf="center"
        >
          <Typography variant="h5">warning.main</Typography>
        </Box>
      </Paper>
    </Paper>
  );
}

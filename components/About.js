/**
 * About component for home page
 */

import { makeStyles, Button, Grid, Paper, Typography, Divider } from "@material-ui/core";
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: "100%",
        background: "rgba(0,0,0,0.7)",
        margin: "auto",
        padding: "5%",
    },
    title: {
        fontWeight: "600",
        fontSize: "1.5rem"
    },
    description: {
        margin: "3% 0",
    },
    resumeLink: {
        margin: "2% 0"
    }


}));

export default function About() {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Grid container direction="row">
                <Grid item xs={12} sm={4}>
                    <Image src="/headshot.png" alt="Profile picture of Vance Denson" height="100px" width="100px" />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Typography variant="subtitle1" className={classes.title}>About Myself</Typography><Divider />
                    <Typography align="left" variant="subtitle2" className={classes.description}>I am a front end developer that has a passion for creating new content and working on complex problems!</Typography>
                    <Typography align='left' variant="subtitle2" className={classes.description}> The majority of my professional expierence has been in software and hardware testing, now I'm pursing fullstack development. My upcoming plans for this website include implementing a dynamic markdown blog with pagination (my resume page is already implemented using mdx-remote) and a few cool APIs that interest me.</Typography>
                    <Typography align="left" variant="subtitle2" className={classes.description}>In my spare time I enjoy spending time with my beautiful family, outdoor sports and coding of course!</Typography>
                    Please check out my <br /> <Link href="/data/blog/resume" as="/Resume"><Button variant="contained" className={classes.resumeLink}>Resume</Button></Link><br /> and some of my projects below!
                </Grid>
            </Grid>
        </Paper>
    )
}
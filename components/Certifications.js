import { makeStyles, Button, Grid, Paper } from "@material-ui/core";
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "none",
    },
    certButton: {
        margin: "2% 2%"

    },
    container: {
        justifyContent: "space-around",
    }


}));

export default function Certifications() {

    const classes = useStyles();

    return (
        <Paper>
            <Grid container className={classes.container}>
                <Grid item className={classes.certButton}>
                    <Link href="https://education.oracle.com/oracle-database-sql-certified-associate/trackp_457"><Button variant="contained" >Oracle - SQL</Button></Link>                </Grid>
                <Grid item className={classes.certButton}>
                    <Link href="https://www.ciwcertified.com/ciw-certifications/web-and-mobile-design-series/advanced-html5-and-css3-specialist/course-description"><Button variant="contained" >CIW - Advanced HTML5 adn CSS3 Specialist</Button></Link>
                </Grid>
                <Grid item className={classes.certButton}>
                    <Link href="https://education.oracle.com/oracle-database-sql-certified-associate/trackp_457"><Button variant="contained" >CIW - User Interface Design</Button></Link>
                </Grid>
                <Grid item className={classes.certButton}>
                    <Link href="https://ciwcertified.com/ciw-certifications/web-and-mobile-design-series/user-interface-designer"><Button variant="contained" >CIW - Website Design Associate</Button></Link>
                </Grid>
                <Grid item className={classes.certButton}>
                    <Link href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/entry/technician-cct.html"><Button variant="contained" >Cisco - CCENT</Button></Link>
                </Grid>
                <Grid item className={classes.certButton}>
                    <Link href="https://www.comptia.org/certifications/project"><Button variant="contained" >CompTIA - Project+</Button></Link>
                </Grid>
            </Grid>
        </Paper>
    )
}
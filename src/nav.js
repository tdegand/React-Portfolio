import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
    Link,
    Grid
} from "@material-ui/core";
import scrollToProjects from './utils/effects.js';

const useStyles = makeStyles({
    navBar: {
        backgroundColor: '#255f37',
    },
    navContainer: {
        width: '250px',
        padding: '5px'
    },
    navLink: {
        padding: '5px',
        cursor: 'pointer'
    }
});

const Navbar = () => {
    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.navBar}>
            <Toolbar>
                <Grid container={true} justify='space-between'>
                    <Grid item={true} className={classes.navLink}>
                    <Typography variant="h6" color="inherit" noWrap >
                        TD
                    </Typography>
                    </Grid>
                    <Grid item={true}>
                        <Grid container={true} justify='space-between' className={classes.navContainer}>
                            <Link className={classes.navLink} color="inherit" onClick={scrollToProjects}>Projects</Link>
                            <Link href='#' className={classes.navLink} color="inherit">About</Link>
                            <Link href='#' className={classes.navLink} color="inherit">Resume</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar
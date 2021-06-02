import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
    Link,
    Grid
} from "@material-ui/core";

const useStyles = makeStyles({
    navBar: {
        backgroundColor: '#255f37',
    },
    navLink: {
        padding: '5px'
    }
});

const Navbar = () => {
    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.navBar}>
            <Toolbar>
                <Grid container={true} justify='space-between'>
                    <Grid item={true}>
                    <Typography variant="h6" color="inherit" noWrap>
                        TD
                    </Typography>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.navLink} color="inherit">Contact Me</Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
    Link
} from "@material-ui/core";

const useStyles = makeStyles({
    navBar: {
        backgroundColor: 'paper',
    },
});

const Navbar = () => {
    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.navBar}>
            <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                TD
            </Typography>
            <Link color="inherit">Contact Me</Link>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar
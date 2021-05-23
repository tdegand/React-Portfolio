import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
    navBar: {
        backgroundColor: 'paper',
    },
});

const Navbar = () => {
    const classes = useStyles();

    return(
        <AppBar position="relative" className={classes.navBar}>
            <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                Album layout
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar
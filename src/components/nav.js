import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
    Link,
    Grid,
} from "@material-ui/core";
import { scrollToProjects, scrollToAbout } from '../utils/effects.js';
import ContactModal from './contactModal';

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: '#519872',
        color: '#34252F'
    },
    toolBar: {
        boxShadow: '0px 3px 5px 1px rgb(0 0 0 / 90%)'
    },
    navContainer: {
        width: '350px',
        padding: '5px'
    },
    logo: {
        fontFamily: 'Caveat, cursive',
        fontSize: '27px',
        paddingRight: '10px',
        fontWeight: 'bold'
    },
    modal: {
        width: '80%',
        maxWidth: '1100px',
        minWidth: '350px',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
      paper: {
        backgroundColor: "#ccc",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        alignItems: 'center',
        borderRadius: '15px'
    },
    exitModal: {
        float: 'right'
    },
    input: {
        width: '85%',
        margin: '10px'
    },
    inputMessage: {
        width: '85%',
        margin: '10px'
    }

}));

const Navbar = (props) => {
    const classes = useStyles();
    const {handleClose, handleOpen, open } = props;  

    return(
        <AppBar position="static" className={classes.navBar}>
            <Toolbar className={classes.toolBar}>
                <Grid container={true} justify='space-between'>
                    <Grid item={true} className={classes.navLink}>
                    <Typography className={classes.logo} variant="h6" color="inherit" noWrap >
                        TD
                    </Typography>
                    </Grid>
                    <Grid item={true}>
                        <Grid container={true} justify='space-between' className={classes.navContainer}>
                            <Link className={'hvr-grow'} color="inherit" onClick={scrollToProjects}>Projects</Link>
                            <Link href='#' className={'hvr-grow'} color="inherit" onClick={scrollToAbout}>About</Link>
                            <Link href='#' className={'hvr-grow'} color="inherit" onClick={handleOpen}>Contact Me</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
            <ContactModal open={open} handleClose={handleClose}/>
        </AppBar>
        
    );
}

export default Navbar
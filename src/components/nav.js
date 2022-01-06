import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Link,
    Grid,
} from "@material-ui/core";
import ContactModal from './contactModal';

const useStyles = makeStyles((theme) => ({
    toolBar: {
        boxShadow: '0px 3px 5px 1px rgb(0 0 0 / 90%)'
    },
    navContainer: {
        width: '350px',
        padding: '5px',
        '@media (max-width: 600px)' : {
            width: '290px'
          }
    },
    logo: {
        fontSize: '27px',
        paddingRight: '10px',
        fontWeight: 'bold',
        pointer: 'none'
    },
    navLink: {
        fontfamily: 'Lato, sans-serif'
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
    const { handleClose, handleOpen, handleSnack, executeScroll, open } = props;

    return (
        <AppBar position="fixed" className={`navBar`} data-aos="fade-down" data-aos-duration="800">
            <Toolbar className={classes.toolBar}>
                <Grid container={true} justify='space-between'>
                    <Grid item={true} className={classes.navLink}>
                        <Typography variant="h4" color="inherit" noWrap >
                            <Link id='top' className={'hvr-grow'} color="inherit" onClick={executeScroll}>TD</Link>
                    </Typography>
                    </Grid>
                    <Grid item={true}>
                        <Grid container={true} justify='space-between' className={classes.navContainer}>
                            <Link id='about' className={'hvr-grow navLink'} color="inherit" onClick={executeScroll}>About</Link>
                            <Link id='projects' className={'hvr-grow navLink'} color="inherit" onClick={executeScroll}>Projects</Link>
                            <Link className={'hvr-grow navLink'} color="inherit" onClick={handleOpen}>Contact Me</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
            <ContactModal open={open} handleClose={handleClose} handleSnack={handleSnack} />
        </AppBar>

    );
}

export default Navbar
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
    Link,
    Grid,
    Modal,
    Backdrop,
    Fade,
    IconButton,
    TextField,
    Button
} from "@material-ui/core";
import { scrollToProjects, scrollToAbout } from '../utils/effects.js';
import BackspaceIcon from '@material-ui/icons/Backspace';

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: '#255f37',
    },
    navContainer: {
        width: '350px',
        padding: '5px'
    },
    logo: {
        fontFamily: 'Caveat, cursive',
        paddingRight: '5px'
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

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }; 

    return(
        <AppBar position="static" className={classes.navBar}>
            <Toolbar>
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
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <IconButton className={classes.exitModal} color="inherit" onClick={handleClose}>
                        <BackspaceIcon>Back</BackspaceIcon>
                    </IconButton>
                    <h2 id="transition-modal-title">Contact Me</h2>
                    <p id="transition-modal-description">Inquiring about a job or just have a question? Send me a message!</p>
                    <form autoComplete="on">
                        <TextField
                            className={classes.input}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="First Name"
                            variant="outlined"
                            type="text"
                        />
                        <TextField
                            className={classes.input}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Last Name"
                            variant="outlined"
                            type="text"
                        />
                        <TextField
                            className={classes.input}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Email"
                            variant="outlined"
                            type="email"
                        />
                        <TextField
                            className={classes.inputMessage}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            type="text"
                        />
                        <Button>

                        </Button>
                    </form>
                </div>
                </Fade>
            </Modal>
        </AppBar>
        
    );
}

export default Navbar
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Modal,
    Backdrop,
    Fade,
    IconButton,
    TextField,
    Button
} from "@material-ui/core";
import BackspaceIcon from '@material-ui/icons/Backspace';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
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
        backgroundColor: "rgb(220,220,220)",
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
        margin: '10px',
        '& label.Mui-focused': {
            color: 'green',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
    },
    inputMessage: {
        width: '85%',
        margin: '10px',
        '& label.Mui-focused': {
            color: 'green',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
    },
    form: {
        position: 'relative',
        padding: "20px",
        paddingBottom: '50px'
    },
    sendButton: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#519872',
        color: 'white',
        "&:hover": {
            backgroundColor: '#3B5249'
        }
    },
}));

const ContactModal = (props) => {
    const classes = useStyles();
    const {handleClose, open } = props; 

    return(
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
                <form className={classes.form} autoComplete="on">
                    <TextField
                        className={classes.input}
                        required
                        id="outlined-required"
                        label="First Name"
                        variant="outlined"
                        type="text"
                    />
                    <TextField
                        className={classes.input}
                        required
                        id="outlined-required"
                        label="Last Name"
                        variant="outlined"
                        type="text"
                    />
                    <TextField
                        className={classes.input}
                        required
                        id="outlined-required"
                        label="Email"
                        variant="outlined"
                        type="email"
                    />
                    <TextField
                        className={classes.inputMessage}
                        required
                        id="outlined-required"
                        label="Send a Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        type="text"
                    />
                    <Button
                        className={classes.sendButton} 
                        variant="contained"
                        endIcon={<SendIcon />}
                    >
                        Send
                    </Button>
                </form>
            </div>
            </Fade>
        </Modal>
    );
}

export default ContactModal
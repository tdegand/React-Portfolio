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
import axios from "axios";

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
    const { handleClose, handleSnack, open } = props
    const [formStatus, setFormStatus] = React.useState(false);
    const [query, setQuery] = React.useState({
        first: '',
        last: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios
            .post(
                "https://usebasin.com/f/af8a391ce0a6",
                formData,
                { headers: { Accept: "application/json" } }
            )
            .then(function (response) {
                setFormStatus(true);
                setQuery({
                    first: '',
                    last: '',
                    email: '',
                    message: ''
                });
                handleClose();
                handleSnack();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
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
                    <form
                        className={classes.form}
                        autoComplete="on"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            className={classes.input}
                            required
                            id="outlined-required"
                            label="First Name"
                            variant="outlined"
                            type="text"
                            name="first"
                            onChange={handleChange}
                        />
                        <TextField
                            className={classes.input}
                            required
                            id="outlined-required"
                            label="Last Name"
                            variant="outlined"
                            type="text"
                            name="last"
                            onChange={handleChange}
                        />
                        <TextField
                            className={classes.input}
                            required
                            id="outlined-required"
                            label="Email"
                            variant="outlined"
                            type="email"
                            name="email"
                            onChange={handleChange}
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
                            name="message"
                            onChange={handleChange}
                        />
                        <Button
                            className={classes.sendButton}
                            variant="contained"
                            type="submit"
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
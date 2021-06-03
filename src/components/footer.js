import React from 'react';
import {
	Typography,
	Link,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#255f37',
      color: 'white',
      padding: theme.spacing(6),
    },
    textColor: {
      color: 'white'
    }
  }));

const Footer = () => {
    const classes = useStyles();

    function Copyright() {
        return (
          <Typography variant="body2" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://tylerdegand.com">
              Tyler Degand
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    return(
        //Add My Resume to the bottom of this so it can be downloaded
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
            Something here to give the footer a purpose!
        </Typography>
        <Copyright />
        </footer>
    );
}

export default Footer 
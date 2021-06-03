import React from 'react';
import {
	Typography,
	Link,
  IconButton,
  Grid
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#519872',
      color: '#dcdcdc',
      padding: theme.spacing(3),
      fontWeight: 'bold'
    },
    textColor: {
      color: '#dcdcdc',
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
          <Typography variant="subtitle1" align="center" component="p">
              See More of my work!
          </Typography>
          <Grid container={true} direction='row' justify="center">
            <Grid item={true}>
              <IconButton href="https://www.linkedin.com/in/tyler-degand-21252bb9/" className={classes.textColor}>
                <LinkedInIcon fontSize="large"  />
              </IconButton>
            </Grid>
            <Grid item={true}>
              <IconButton href="https://github.com/tdegand" className={classes.textColor}>
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <Copyright />
        </footer>
    );
}

export default Footer 
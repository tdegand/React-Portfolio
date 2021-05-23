import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";

const useStyles = makeStyles({
    navBar: {
        backgroundColor: 'paper',
    },
});

const MainContent = () => {
    const classes = useStyles();

    return(
        <Container>
            <Grid>

            </Grid>
        </Container>
    );
}

export default MainContent
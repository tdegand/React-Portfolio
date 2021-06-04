import React from 'react';
import {
	Link,
	CssBaseline,
	Grid,
	Typography,
	Snackbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import NavBar from './nav';
import MainContent from './maincontent';
import About from './about';
import Footer from './footer';
import Image from '../images/wood.jpg';
import { scrollToProjects } from '../utils/effects.js';
import Headshot from '../images/Tyler.jpg';

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	header: {
		height: window.innerHeight,
		backgroundImage: `url(${Image})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		padding: theme.spacing(8, 0, 6),
	},
	headerButtons: {
		marginTop: theme.spacing(4),
	},
	main: {
		height: 'maxContent',
		backgroundColor: '#a6ab9b',
		boxShadow: 'inset 0px 0px 4px 3px rgb(0 0 0 / 80%)'
	},
	text: {
		color: '#000000',
		fontFamily: 'Source Sans Pro, sans-serif'
	},
	headerCon: {
		height: '65%',
		marginTop: '100px'
	},
	textBox: {
		backgroundColor: 'rgba(220,220,220, 0.8)',
		padding: '15px',
		margin: '10px',
		borderRadius: '25px',
		border: 'solid 3px #3B5249'
	}
}));

const Alert = (props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [snackOpen, setSnackOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleSnack = () => {
		setSnackOpen(true);
	};

	const handleSnackClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setSnackOpen(false);
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<NavBar open={open} handleClose={handleClose} handleOpen={handleOpen} handleSnack={handleSnack} />
			<header>
				{/* Hero unit */}
				<div className={classes.header}>
					{/* <Container maxWidth="sm" justify="start"> */}
					<Grid container={true} justify='center' alignContent='space-between' className={classes.headerCon}>
						<Grid container={true} justify='center'>
							<img className={`headshot`} src={Headshot} alt="Tyler Degand" data-aos="fade-right" data-aos-offset="500" data-aos-duration="800"></img>
						</Grid>
						<Grid item={true} className={classes.textBox} data-aos="fade-left" data-aos-offset="300" data-aos-duration="800">
							<Typography
								className={classes.text}
								component="h1"
								variant="h3"
								align="center"
								color="initial"
								gutterBottom
							>
								I'm Tyler Degand
								</Typography>
							<Typography
								className={classes.text}
								variant="h4"
								align="center"
								color="textSecondary"
								paragraph
							>
								Full Stack Web Developer
								</Typography>
							<div className={classes.headerButtons}>
								<Grid container spacing={2} justify="center">
									<Grid item>
										<Link className={'hvr-float'} onClick={scrollToProjects}>
											My Work
											</Link>
									</Grid>
								</Grid>
							</div>
						</Grid>
					</Grid>
					{/* </Container> */}
				</div>
			</header>
			<main className={classes.main}>
				<About />
				<MainContent />
				<Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleSnackClose} >
					<Alert onClose={handleSnackClose} severity="success">
						Your message has been sent successfully!
					</Alert>
				</Snackbar>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default Home;

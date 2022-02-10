import React, { useRef } from 'react';
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
import Image from '../images/dark-triangles.png';



const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	header: {
		height: window.innerHeight,
		minHeight: '700px',
		backgroundImage: `url(${Image})`,
		padding: theme.spacing(8, 0, 6),
	},
	headerButtons: {
		marginTop: theme.spacing(4),
	},
	main: {
		height: 'maxContent',
		backgroundColor: '#1d3e2d',
		boxShadow: 'rgb(0 0 0 / 30%) 0px 2px 4px 0px inset'
	},
	text: {
		color: '#fff',
		fontFamily: 'Source Sans Pro, sans-serif'
	},
	myName: {
		color: '#519872',
		fontFamily: 'Source Sans Pro, sans-serif',
		fontSize: '75px'
	},
	myTitle:{
		color: '#fff',
		fontSize: '26px',
		fontFamily: 'Source Sans Pro, sans-serif'
	},
	headerCon: {
		height: '65%',
		marginTop: '50px',
		display: 'flex',
		alignContent: 'center'
	},
}));

const Alert = (props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home = () => {
	const classes = useStyles();
	const top = useRef(null);
	const about = useRef(null);
	const projects = useRef(null);
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

	const executeScroll = (event) => {
		console.log(event.target);
		if(event.target.id === 'about') {
			about.current.scrollIntoView();
		} else if (event.target.id === 'projects') {
			projects.current.scrollIntoView();
		} else if (event.target.id === 'top') {
			top.current.scrollIntoView();
		}
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<NavBar open={open} handleClose={handleClose} handleOpen={handleOpen} handleSnack={handleSnack} executeScroll={executeScroll} />
			<header>
				{/* Hero unit */}
				<div ref={top} className={classes.header}>
					<Grid container={true} justify='center' alignContent='space-between' className={classes.headerCon}>
						<Grid item={true} className={`textBox`} >
							<Typography
								className={classes.text}
								component="p"
								align="center"
								color="initial"
								gutterBottom
							>
								Hi my name is
							</Typography>
							<Typography
								className={classes.myName}
								component="h1"
								variant="h3"
								align="center"
								color="initial"
								gutterBottom
							>
								Tyler Degand
							</Typography>
							<Typography
								className={classes.myTitle}
								variant="h4"
								align="center"
								color="textSecondary"
								paragraph
							>
								Full Stack Software Engineer
								</Typography>
							<div className={classes.headerButtons}>
								<Grid container spacing={2} justify="center">
									<Grid item>
										<Link id='projects' className={'hvr-float'} onClick={executeScroll}>
											My Work
										</Link>
									</Grid>
								</Grid>
							</div>
						</Grid>
					</Grid>
				</div>
			</header>
			<main className={classes.main}>
				<About refProp={about} />
				<MainContent refProp={projects} />
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

import React from 'react';
import {
	Link,
	CssBaseline,
	Grid,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './nav';
import MainContent from './maincontent';
import About from './about';
import Footer from './footer';
import Image from '../images/beanstalk-dark.png';
import { scrollToProjects } from '../utils/effects.js';
import Headshot from '../images/Tyler.jpg';

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	header: {
		height: window.innerHeight,
		backgroundImage: `url(${Image})`,
		backgroundSize: 'auto',
		backgroundRepeat: 'repeat',
		padding: theme.spacing(8, 0, 6),
	},
	headerButtons: {
		marginTop: theme.spacing(4),
	},
	main: {
		height: 'maxContent',
		backgroundColor: "#dcdcdc"
	},
	headshot: {
		height: '100%',
		width: '30%',
		borderRadius: '50px',
		minWidth: '150px',
		maxWidth: '250px'
	},
	text: {
		color: 'white',
		fontFamily: 'Source Sans Pro, sans-serif'
	},
	headerCon: {
		height: '65%'
	}
}));

const Home = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<NavBar />
			<header>
				{/* Hero unit */}
				<div className={classes.header}>
					{/* <Container maxWidth="sm" justify="start"> */}
						<Grid container={true} justify='center' alignContent='space-between' className={classes.headerCon}>
							<Grid container={true} justify='center'>
								<img className={classes.headshot} src={Headshot} alt="Italian Trulli"></img>
							</Grid>
							<Grid item={true}>
								<Typography
									className={classes.text}
									component="h1"
									variant="h2"
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
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
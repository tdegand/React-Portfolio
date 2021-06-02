import React from 'react';
import {
	Button,
	CssBaseline,
	Grid,
	Typography,
	Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../nav';
import MainContent from './maincontent';
import Footer from '../footer';
import Image from '../images/background-art1.jpg';
import Headshot from '../images/Tyler.jpg';

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	header: {
		height: window.innerHeight,
		backgroundImage: `url(${Image})`,
		backgroundSize: 'cover',
		padding: theme.spacing(8, 0, 6),
	},
	headerButtons: {
		marginTop: theme.spacing(4),
	},
	main: {
		height: 'fitcontent'
	},
	headshot: {
		height: '100%',
		width: '50%',
		borderRadius: '50%',
		marginLeft: '25%'
	},
	button: {
		borderRadius: '30%'
	}
}));

const Home = () => {
	console.log(window.innerHeight);
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<NavBar />
			<header>
				{/* Hero unit */}
				<div className={classes.header}>
					{/* <Container maxWidth="sm" justify="start"> */}
						<Grid direction='row' container={true}>
							<Grid item={true} justify='center'>
								<img className={classes.headshot} src={Headshot} alt="Italian Trulli"></img>
							</Grid>
							<Grid item={true}>
								<Typography
									component="h1"
									variant="h2"
									align="center"
									color="textPrimary"
									gutterBottom
								>
									I'm Tyler Degand
								</Typography>
								<Typography
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
											<Button variant="contained" color="primary" size='large'>
												My Work
											</Button>
										</Grid>
									</Grid>
								</div>
							</Grid>
						</Grid>
					{/* </Container> */}
				</div>
			</header>
			<main className={classes.main}>
				<MainContent />
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default Home;

import React from "react";
import {
	Button,
	CssBaseline,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../nav";
import Footer from "../footer";

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	header: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	headerButtons: {
		marginTop: theme.spacing(4),
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<NavBar />
			<main>
				{/* Hero unit */}
				<div className={classes.header}>
					<Container maxWidth="sm" justify="start">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							Album layout
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							paragraph
						>
							Something short and leading about the collection below—its
							contents, the creator, etc. Make it short and sweet, but not too
							short so folks don&apos;t simply skip over it entirely.
						</Typography>
						<div className={classes.headerButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button variant="contained" color="primary">
										My Work
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default Home;

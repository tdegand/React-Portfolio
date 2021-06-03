import React from "react";
import { Link, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LinkedIn from '../images/Linkedin.png'

const useStyles = makeStyles(() => ({
    parentAbout: {
        height: "fitContent",
        paddingTop: '100px',
        paddingBottom: '100px',
    },
	aboutMe: {
		width: "80%",
        minWidth: '345px',
        maxWidth: '900px',
		margin: "auto",
		fontFamily: "Caudex, serif",
		fontWeight: "bold",
		fontSize: "22px",
        padding: '50px',
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<Grid conatiner={true} className={classes.parentAbout}>
			<Grid
				container={true}
				className={classes.aboutMe}
				justify="center"
				alignContent="center"
			>
				<Grid item={true}>
					<p>
						Self-motivated Web Developer who adds a fresh perspective to
						web-based products through development experience. Passionate,
						hardworking with penchant for developing customized interfaces that
						factor in unique demands for accessibility, reachability and
						security. Uses active knowledge of current technology landscape to
						promote best practices in web design.
					</p>
				</Grid>
				<Grid item={true} className={classes.bottomText}>
					<p>
						My path has been paved by my own perseverance and motivation to
						learn new skills. I'm a self taught developer who currently works
						full time as a developer. I will continue to pave my path and keep
						learning and working towards becoming a better developer.
					</p>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default About;
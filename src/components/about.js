import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Headshot from '../images/Tyler.jpg';


const useStyles = makeStyles(() => ({
	parentAbout: {
		height: "fitContent",
		paddingTop: '200px',
		paddingBottom: '250px',
	},
	aboutMe: {
		width: "80%",
		minWidth: '345px',
		maxWidth: '900px',
		margin: "auto",
		fontFamily: 'Barlow, sans-serif',
		fontSize: "20px",
		textAlign: 'center',
		padding: '20px',
		color: '#fff',
		'@media (max-width: 600px)' : {
            fontSize: "16px",
          }
	},
	headBox: {
		marginTop: '35px'
	}
}));

const About = (props) => {
	const classes = useStyles();

	return (
		<Grid ref={props.refProp} container={true} className={classes.parentAbout}>
			<Grid
				container={true}
				className={classes.aboutMe}
				justify="center"
				alignContent="center"
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-offset="200"
			>
				<Grid item={true}>
					<p>
						I'm a self-motivated Software Engineer who adds a fresh perspective to
						web-based products through development experience. I'm passionate,
						hardworking and have a penchant for developing customized software that
						factors in unique demands for accessibility, reachability and
						security. My active knowledge of the current technology landscape allows me to use and
						promote best practices in web design.
					</p>
				</Grid>
				<Grid item={true}>
					<p>
						My path has been paved by my own perseverance and motivation to
						learn new skills. I'm a self taught developer who currently works
						full time in the industry. I will continue to pave my path and keep
						learning and working towards becoming a better developer.
					</p>
				</Grid>
				<Grid container={true} justify='center' className={classes.headBox}>
					<img className={`headshot`} src={Headshot} alt="Tyler Degand" ></img>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default About;

import React from "react";
import _ from 'lodash';
import { makeStyles } from "@material-ui/core/styles";
import {
	Grid,
	Container,
} from "@material-ui/core";
import ProjectCards from './projectCards';
import Data from '../data/data.json';


const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	cardCon: {
		width: '100%',
		paddingTop: '100px',
		paddingBottom: '100px',
	},
	break: {
		borderTop: '5px solid #fff',
		borderRadius: '5px'
	}
}));

const MainContent = (props) => {
	const classes = useStyles();
	const [data, setData] = React.useState({});

	React.useEffect(() => {
		setData(Data.projects);
	}, []);

	return (
		<Container fixed >
			<hr className={classes.break}></hr>
			<Grid ref={props.refProp} container className={classes.cardCon} direction="row" justify="center" alignContent="center" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="500">
				{_.map(data, project => {
					return <ProjectCards key={project.id} project={project} />
				})}
			</Grid>
		</Container>
	);
};

export default MainContent;

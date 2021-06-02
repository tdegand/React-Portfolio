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
	navBar: {
		backgroundColor: "paper",
	},
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
	card: {
		maxWidth: 345,
	}
}));

const MainContent = () => {
	const classes = useStyles();
	const [data, setData] = React.useState({});

	React.useEffect(() => {
		setData(Data.projects);
	  });

	
	console.log(data);
	return (
		<Container fixed>
			<Grid container direction="row" justify="center" alignItems="center">
				{_.map(data, project => {
						return <ProjectCards />
				})}
			</Grid>
		</Container>
	);
};

export default MainContent;

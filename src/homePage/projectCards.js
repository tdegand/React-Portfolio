import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import _ from "lodash";
import {
	Grid,
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	CardHeader,
	IconButton,
	Collapse,
    Modal,
    Backdrop,
    Fade,
    Button
} from "@material-ui/core";
import BackspaceIcon from '@material-ui/icons/Backspace';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,
		paddingTop: '100%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: '42.5%',
        width: '50px',
        height: '50px',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	card: {
		width: 345,
    },
    expandedImg: {
        width: '45%',
        padding: '20px',
        display: 'block'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
      paper: {
        backgroundColor: "#ccc",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        alignItems: 'center'
    },
    exitModal: {
        float: 'right'
    }
}));

const ColorButton = withStyles(() => ({
	root: {
		backgroundColor: '#255f37',
		color: 'white',
        marginLeft: '28%',
		'&:hover': {
			backgroundColor: '#007725',
			color: 'white'
		},
	},
  }))(Button);

const ProjectCards = (props) => {
	const classes = useStyles();
    const { project } = props;
    const [open, setOpen] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleExpandClick = (event) => {
        console.log(event.target);
            setExpanded(!expanded)
    };  

    const squareImg = require('../images/' + project.image_urls[0] + '.jpg').default;
    const img1 = require('../images/' + project.image_urls[1] + '.jpg').default;
    const img2 = require('../images/' + project.image_urls[2] + '.jpg').default;

	return (
        <Grid>
            <Card className={classes.card} variant="outlined">
                <CardHeader
                    title={project.project_name}
                />
                <CardMedia
                    className={classes.media}
                    image={squareImg}
                    title={project.alt[0]}
                />
                <CardActions disableSpacing>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        {project.description}
                    </Typography>
                    <Typography paragraph>
                        {project.technologies.join(', ')}
                    </Typography>
                    <ColorButton onClick={handleOpen}>
                        View Examples
                    </ColorButton>
                    </CardContent>
                </Collapse>
            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <IconButton className={classes.exitModal} color="inherit" onClick={handleClose}>
                        <BackspaceIcon>Back</BackspaceIcon>
                    </IconButton>
                    <h2 id="transition-modal-title">Example Images</h2>
                    <p id="transition-modal-description">A few more images of the work and how it looks</p>
                    <img className={classes.expandedImg} src={img1}></img>
                    <img className={classes.expandedImg} src={img2}></img>
                </div>
                </Fade>
            </Modal>
        </Grid>
        
)}

export default ProjectCards
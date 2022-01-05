import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import {
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Collapse,
    Modal,
    Backdrop,
    Fade,
    Link
} from "@material-ui/core";
import BackspaceIcon from '@material-ui/icons/Backspace';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '75%', // 16:9
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
        position: 'relative',
        width: 345,
        margin: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        border: 'none',
        boxShadow: 'rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 10%) 0px 8px 24px, rgb(17 17 26 / 10%) 0px 16px 56px',
    },
    expandedImg: {
        width: '100%',
        marginTop: '20px',
        display: 'block',
        boxShadow: '3px 4px 4px -3px #969696'
    },
    modal: {
        width: '80%',
        maxWidth: '1100px',
        minWidth: '400px',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "#dcdcdc",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        alignItems: 'center',
        borderRadius: '15px'
    },
    exitModal: {
        float: 'right'
    },
    bottom: {
        marginTop: '2px',
        borderTop: 'solid 1px #34252F'
    },
    // otherButtons: {

    // }
}));

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
    const handleExpandClick = () => {
        setExpanded(!expanded)
    };

    const squareImg = require('../images/' + project.image_urls[0] + '.jpg').default;
    const img1 = require('../images/' + project.image_urls[1] + '.jpg').default;
    const img2 = require('../images/' + project.image_urls[2] + '.jpg').default;

    return (
        <Grid>
            <Card className={classes.card} variant="outlined" >
                <Typography component="h5" variant="h5" className={'headerText'}>{project.project_name}</Typography>
                <CardMedia
                    className={classes.media}
                    image={squareImg}
                    title={project.alt[0]}
                />
                <CardActions disableSpacing className={classes.bottom}>
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
                    <CardContent className={'expandedCon'}>
                        <Typography paragraph>
                            {project.description}
                        </Typography>
                        <Typography paragraph>
                            {project.technologies.join(', ')}
                        </Typography>
                        <Grid className={`cardButtonCon`} container={true} justify="space-evenly">
                            <Grid item={true}>
                                <Link href={project.live_link} className={`cardButtons hvr-float`}>
                                    Demo
                                </Link>
                            </Grid>
                            <Grid item={true}>
                                <Link href={project.github_link} className={`cardButtons hvr-float`}>
                                    Github Repo
                                </Link>
                            </Grid>
                        </Grid>
                        <Link className={`cardButton hvr-float`} onClick={handleOpen}>
                            View Examples
                        </Link>
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
                        <img className={classes.expandedImg} src={img1} alt={project.alt[1]}></img>
                        <img className={classes.expandedImg} src={img2} alt={project.alt[2]}></img>
                    </div>
                </Fade>
            </Modal>
        </Grid>

    )
}

export default ProjectCards
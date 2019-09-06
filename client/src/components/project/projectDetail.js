import React, {useEffect} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";
import connect from "react-redux/es/connect/connect";
import {getProjects} from "../../store/project/projectActions";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    detailCard: {
        width: '60%',
        margin: 'auto',
    },
}));

function ProjectDetail(props) {
    const classes = useStyles();
    useEffect(() => {
        props.getProjects();
    }, []);
    const project = props.projects.find(project => project.id === parseInt(props.match.params.id, 10));

    return (
        <>
            <h1>Project Details</h1>
            <Card className={classes.detailCard}>
                {props.projects.length !== 0 &&
                <CardContent>
                    <Typography variant="h5" component="h5">Project name: {project.name}</Typography>
                    <Typography variant="body2" component="p">Description: {project.description}</Typography>
                </CardContent>
                }
            </Card>
        </>
    )
}

const mapPropsToState = state => {
    return {
        projects: state.projects.projects,
    };
};

export default connect(mapPropsToState, {getProjects})(ProjectDetail);
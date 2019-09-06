import React, {useEffect} from 'react';
import {getProjects} from "../../store/project/projectActions";
import connect from "react-redux/es/connect/connect";
import ProjectCard from "./projectCard";
import Grid from "@material-ui/core/Grid";

function Projects(props) {

    useEffect(() => {
        props.getProjects();
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <Grid container spacing={2}>
                {console.log('projects -', props.projects)}
                {props.projects.length !== 0  ? props.projects.map(project =>
                        <Grid xs={12} sm={3} item> <ProjectCard project={project}/></Grid>)
                    : <h1>Hey</h1>
                }
            </Grid>
        </div>
    )
}

const mapPropsToState = state => {
    return {
        projects: state.projects.projects,
    };
};

export default connect(mapPropsToState, {getProjects})(Projects);


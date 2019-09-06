import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';

export default function ProjectCard(props) {
    return (
        <Card>
            {console.log('project', props.project)}
            <CardContent>
                <Typography  variant="h5" component="h5">Project name: {props.project.name}</Typography>
                <Typography  variant="body2" component="p">Description: {props.project.description}</Typography>
            </CardContent>
        </Card>
    )
}
import React from "react";
import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import Button from "@material-ui/core/Button/index";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {Link as RouterLink} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    navBar: {
        background: "#08a9d8",
        color: "black",
        boxShadow: "none",
        borderBottom: "1.5px solid #EDEDED",
    },
    title: {
        flexGrow: 1,
        color: "white",

    },
}));

const LinkButton = withStyles(theme => ({
    root: {
        color: "black",
        "&:hover": {
            color: "black",
        },
    },
}))(Button);

const NavBar = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <AppBar className={classes.navBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <LinkButton component={RouterLink} to="/projects">Projects</LinkButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;


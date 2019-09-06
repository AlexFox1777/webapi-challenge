import React from 'react';
import './App.css';
import Projects from "./components/project/projectsList";
import ProjectDetail from "./components/project/projectDetail";
import Container from "@material-ui/core/Container";
import NavBar from "./components/navbar/NavBar";
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 65,
        textAlign: 'center'
    },
}));
function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Switch>
                    <Container className={classes.container}>
                        <Route exact path="/projects" component={Projects}/>
                        <Route path="/projects/:id" component={ProjectDetail}/>
                        <Redirect from="/" to="/projects"/>
                    </Container>
                </Switch>


            </Router>
        </div>
    );
}

export default App;

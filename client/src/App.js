import React from 'react';
import './App.css';
import Projects from "./components/project/projectsList";
import Container from "@material-ui/core/Container";
import NavBar from "./components/navbar/NavBar";
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Switch>
                    <Container>
                        <h1>Projects</h1>
                        <Route path="/projects" component={Projects}/>
                        {/*<Projects/>*/}
                        <Redirect from="/" to="/projects"/>
                    </Container>
                </Switch>


            </Router>
        </div>
    );
}

export default App;

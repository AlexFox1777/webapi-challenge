const express = require('express');

const router = express.Router();

const project_db = require('../helpers/projectModel');

router.post('/', (req, res) => {
    const project = req.body;
    if (project.name && project.description) {
        project_db.insert(project)
            .then(project => res.status(201).json(project))
            .catch(err => res.status(500).json({error: "There was an error while saving the project to the database"}))
    } else {
        res.status(400).json({errorMessage: "Please provide name and description for the project."});
    }

});

router.get('/', (req, res) => {
    project_db.get()
        .then(projects => res.status(200).json(projects))
        .catch(err => err.status(500).json({error: "The projects information could not be retrieved."}))
});

router.get('/:id', validateProjectId, (req, res) => {
    const id = req.params.id;
    project_db.getProjectActions(id)
        .then(actions => res.status(200).json(actions))
        .catch(err => res.status(500).json({error: "The actions information could not be retrieved"}))
});

router.put('/:id', validateProjectId, (req, res) => {
    const id = req.params.id;
    const project = req.body;
    if (project.name && project.description) {
        project_db.update(id, req.body)
            .then(project => res.status(200).json(project))
            .catch(err => res.status(500).json({error: "The project information could not be modified."}))
    } else {
        res.status(400).json({errorMessage: "Please provide name and description for the project."});
    }

});

router.delete('/:id', validateProjectId, (req, res) => {
    const id = req.params.id;
    project_db.remove(id)
        .then(project => res.status(200).json(project))
        .catch(err => res.status(500).json({error: "The project could not be removed"}))
});


function validateProjectId(req, res, next) {
    const id = req.params.id;
    project_db.get(id)
        .then(project => {
            if (project !== null) {
                req.project = req.body;
                next();
            } else {
                res.status(400).json({message: "invalid project id"});
            }
        })
        .catch(err => res.status(500).json({errorMessage: "Server error"}));

}

module.exports = router;
const express = require('express');

const router = express.Router();

const action_db = require('../helpers/actionModel');

router.post('/', (req, res) => {
    const action = req.body;
    if (action.notes && action.description && action.project_id) {
        action_db.insert(action)
            .then(action => res.status(201).json(action))
            .catch(err => res.status(500).json({error: "There was an error while saving the action to the database"}))
    } else {
        res.status(400).json({errorMessage: "Please provide notes, project_id and description for the action."});
    }

});

router.get('/', (req, res) => {
    action_db.get()
        .then(actions => res.status(200).json(actions))
        .catch(err => err.status(500).json({error: "The actions information could not be retrieved."}))
});

router.put('/:id', validateUserId, (req, res) => {
    const id = req.params.id;
    const action = req.body;
    if (action.notes && action.description) {
        action_db.update(id, req.body)
            .then(action => res.status(200).json(action))
            .catch(err => res.status(500).json({error: "The action information could not be modified."}))
    } else {
        res.status(400).json({errorMessage: "Please provide notes and description for the action."});
    }

});

router.delete('/:id', validateUserId, (req, res) => {
    const id = req.params.id;
    action_db.remove(id)
        .then(action => res.status(200).json(action))
        .catch(err => res.status(500).json({error: "The action could not be removed"}))
});


function validateUserId(req, res, next) {
    const id = req.params.id;
    action_db.get(id)
        .then(action => {
            if (action) {
                req.action = req.body;
                next();
            } else {
                res.status(400).json({message: "invalid action id"});
            }
        });

}

module.exports = router;
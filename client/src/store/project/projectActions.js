import {
    GET_ALL_PROJECTS_START,
    GET_ALL_PROJECTS_SUCCESS,
    GET_ALL_PROJECTS_FAILURE
} from "./types";
import axios from 'axios';

export const getProjects = () => dispatch => {
    dispatch({type: GET_ALL_PROJECTS_START});
    axios
        .get('http://localhost:8000/projects')
        .then(res => {
            dispatch({
                type: GET_ALL_PROJECTS_SUCCESS,
                payload: res.data,
            });
        })
        .catch(err =>
            dispatch({
                    type: GET_ALL_PROJECTS_FAILURE,
                payload: err.response,
            }),
        );
};


import {
    GET_ALL_PROJECTS_START,
    GET_ALL_PROJECTS_SUCCESS,
    GET_ALL_PROJECTS_FAILURE
} from "./types";

const initialState = {
    projects: [],
    isLoading: false,
    error: ""
};

const reducers = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_PROJECTS_START:
            return {
                ...state,
                error: "",
                isLoading: true,
            };
        case GET_ALL_PROJECTS_SUCCESS:
            return {
                ...state,
                error: "",
                projects: payload,
                isLoading: false,
            };
        case GET_ALL_PROJECTS_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default reducers;
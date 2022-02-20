import {GET_USERS, ADD_USER, ERROR_USER, APPEND_USER_INFO, UPDATE_USER_INFO, DELETE_USER} from "./type";
import {initialState} from './state'

export const usersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
            }
        case ADD_USER:
            return {
                ...state,
                users: payload,
            }
        case ERROR_USER:
            return {
                ...state,
                error: payload
            }
        case APPEND_USER_INFO:
            return {
                ...state,
                error: payload
            }
            case UPDATE_USER_INFO:
            return {
                ...state,
                error: payload
            }
        case DELETE_USER:
            return {
                ...state,
                error: payload
            }

        default:
            return state;
    }
}
import axios from "axios";
import {GET_USERS, ADD_USER, ERROR_USER, APPEND_USER_INFO, UPDATE_USER_INFO, DELETE_USER} from "./type";
import {USER_INFO_API, ADD_USER_API, APPEND_USER_INFO_API, UPDATE_USER_INFO_API, DELETE_USER_API} from "./userApi";


export const getUsers = () => dispatch => {
    return axios.get(USER_INFO_API).then(res => {
        console.log(res)
        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    }).catch(err => {
        dispatch({
            type: GET_USERS,
            payload: err,
        });
    });
}
export const postUsers = (x) => dispatch => {
    return axios.post(ADD_USER_API, x).then(res => {
        dispatch({
            type: ADD_USER,
            payload: res.config.data,
        });
    })
        .catch(error => {
                dispatch({
                    type: ERROR_USER,
                    payload: error
                })
            }
        )
}
export const appendUserInfo = (x) => dispatch => {
    return axios.put(APPEND_USER_INFO_API, x).then(res => {
        dispatch({
            type: APPEND_USER_INFO,
            payload: res.config.data,
        });
    }).catch(error => {
        dispatch({
            type: ERROR_USER,
            payload: error
        })
    })

}
export const updateUserInfo = (x) => dispatch => {
    return axios.patch(UPDATE_USER_INFO_API, x).then(res => {
        dispatch({
            type: UPDATE_USER_INFO,
            payload: res.config.data,
        });
    }).catch(error => {
        dispatch({
            type: ERROR_USER,
            payload: error
        })
    })

}
export const deleteUser = (x) => dispatch => {
    return axios.delete(DELETE_USER_API, x).then(res => {
        dispatch({
            type: DELETE_USER,
            payload: res.config.data,
        });
    }).catch(error => {
        dispatch({
            type: ERROR_USER,
            payload: error
        })
    })

}

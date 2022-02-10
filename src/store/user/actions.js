import React, {useState} from "react";
import store from "../index";

export const getUsers = () => (dispatch) => {
    fetch("https://6dyqv.mocklab.io/users")
        .then(res => res.json())
        .then(usersList => {
           dispatch("SET_USERS", usersList)
        });
}

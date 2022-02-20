import {combineReducers} from '@reduxjs/toolkit'
import counterReducer from '../store/features/counter/counterSlice'
import {usersReducer} from "./user/reducers";
import {TriggerReducer} from "./cart/reducers";
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';

export const allReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    open:TriggerReducer
});


const middleware = [thunk]
export const store = createStore(allReducer,{},applyMiddleware(...middleware))

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/features/counter/counterSlice'
import {reducers} from "./user/reducers";

export default configureStore({
    reducer: {
        counter: counterReducer,
        users:reducers
    }
})
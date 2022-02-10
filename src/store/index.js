import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer

    }
})
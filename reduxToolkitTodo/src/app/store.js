

// step-1 create the store  initially empty object tha

// step-6 import toodReucer to make them aware
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// stpe-7 make the store aware about the reducer (if more than one reducer, we could have passed array)
export const store = configureStore({
    reducer: todoReducer
})
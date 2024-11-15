

// step-2 after creating store do this

// nanoid generates the unique id before we are using Date.now() to make it unique
import {createSlice, nanoid } from '@reduxjs/toolkit';

// step-3 create initial state


// define the initial state of store it take the object
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


// step-4 create slice and reducers and then define their functionality

// create slice 
// in this, name property is defined in redux toolkit 
// in the reducers, we define the function decalration(definition) and their functionality(implementation) which is different from context api there we will only declares the function definition but not functionality
// state give acces to current state (it may have 10 todos or 1 todos)
// action(gives the data,jo bhi data passs hora ho) kuch bhi value are he uska access deta he jese remove krne k lie id chahiye

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        //payload ek object h,it has data like id,emailid
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            //new todo add kardia state mein
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {

            // state ko update krdia
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})


// step-5 store ko bhi awareness chahiye in reducers k bare mein, to maintain store, iske andr jojo reducers register krege,
// unse hi values leke store ko update krege


// individual reducers ko bhi export krna hoga, it will be used in the components
export const {addTodo, removeTodo} = todoSlice.actions

// sare reducer ko bhi export kro, more than 1 slice ho skte hein like oauthSlice,storeSlice
export default todoSlice.reducer
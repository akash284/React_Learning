import {createContext , useContext} from 'react'

// step - 1 create context && define default values and methods and define the functions but not the functionality 
// mostly functionality app,jsx m likhte hein
export const TodoContext =  createContext( {

    todos : [ 
        {

        id:1,
        todo: "Todo Msg",
        completed:false,
    }
   ],
   addTodo: (todo) => {},
   updateTodo: (id,todo) => {},
   deleteTodo: (id) => {},
   toggleComplete: (id) => {}

})

// step-2 create hooks

export const useTodo =  () => {

    return useContext(TodoContext);
}

// step-3 create context provider

export const TodoProvider = TodoContext.Provider;


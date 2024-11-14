import { useEffect, useState } from "react";

import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import {TodoProvider} from './context'
import "./App.css";

function App() {

  // todos ko store krne k lie useState use krege 
  const [todos,setTodos] = useState([])  // initially koi todos ni h


  // ye todo humein form k andr se milega
  const addTodo = (todo) => {
    
    console.log(todo.id)
    // previous all todos ko lege first then ise add krege ( ...oldtodos) destructuring bolte ise
    setTodos( (oldTodos) => [ {id:Date.now(),...todo}, ...oldTodos])
  }

 
  const updateTodo = (id,todo) => {
 
    // pehle ye id wala todo find krege hrek todos m loop lgake
    setTodos( (oldTodos) => oldTodos.map( (oldtodo) => (oldtodo.id=== id ? todo : oldtodo )))  
  }

  const deleteTodo = (id) => {

    // filtered all recors which do not match with the given id
    setTodos( (oldTodos) => oldTodos.filter( (todo) => todo.id !== id ))
  }
  const toggleComplete = (id) => {

    setTodos ( (oldTodos) => oldTodos.map( (oldtodo) => oldtodo.id === id ? {...oldtodo, completed: !oldtodo.completed } : oldtodo ))
  }


  // whenever applicatoin loads for the first i  want my all previous todoes to come from localstorage
  useEffect( () => {

    // localstorage return type is string so need to convert it to json 
    const todos = JSON.parse(localStorage.getItem("todos"))

    if( todos && todos.length > 0) {
      setTodos(todos);
    }

  } , [])

  // whenever new Todo comes we need to store it in local storage
  useEffect( () => {

    // SAVE ITEM in local storage
    localStorage.setItem( "todos",JSON.stringify(todos))

  } , [todos])
  return (
    <TodoProvider value = { {todos,addTodo,updateTodo,deleteTodo,toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
         
            {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

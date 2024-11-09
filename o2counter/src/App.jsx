

import { useState } from 'react';
import './App.css'

// UI Updation ni hora tha,console.log krne pr update hora tha pr ui par reflect ni hora tha
//islie HOOKS k use krege,bcz react has the control to update the ui 
function App() {


 // setCounter ek method h jo ki counter variable ko control karega
  let [counter,setCounter]= useState(15);

  // is variable ko m update karskta hu,pr ui m update ni hoga islie hooks k use krege,
  //let counter=15

const addValue= ()=>{

  // when we write setCounter(count+1)  multiple times but the value is changed only once? why 
  //  React batches multiple state updates within the same synchronous event. So, if you have multiple setCounter(counter + 1) calls
  //React doesn’t immediately apply each update.
  // Instead, it waits until the end of the synchronous code execution to process them all together.


  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)

  //To handle multiple state updates that depend on the previous state, 
  //you can use a functional update by passing a function to setCounter:

  setCounter( counter =>counter+1)
  setCounter( counter=>counter+1)
  setCounter(counter=>counter+1)
 
//   if(counter<20){


//   counter=counter+1
//   setCounter(counter)
//   console.log("value added : ",counter);
// }
// else{
//   counter=20
//   setCounter(counter)
// }

}

const removeValue = ()=> {
  
  if(counter>0){

    counter=counter-1;
  setCounter(counter)
  console.log("value decreased : ", counter)
  }
  else{
    counter=0
    setCounter(counter)
  }
  
}
  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value : {counter} </h2>

     <button  onClick={addValue}>Add Value : {counter}</button>
     <br/>
     <button onClick={removeValue}>Decrease Value : {counter} </button>

     <p>footer : {counter} </p>
    </>
  )
}

export default App

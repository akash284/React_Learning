

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

 
  if(counter<20){


  counter=counter+1
  setCounter(counter)
  console.log("value added : ",counter);
}
else{
  counter=20
  setCounter(counter)
}

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

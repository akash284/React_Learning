import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj={
    username : "Akash sharma",
    age : 21
  }
  let myArr=[1,2,3]
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test </h1>
      
     {/* <Card  username="chai or code with akash"  mineobj={myObj} arr={myArr}  /> */}
    {/* <Card username="chai or code with akash"  btnText="click me"/> */}

     <Card username="chai and code"  btnText="click me"/>
     <Card username="chai and code with akash" />
        
       {/* <Card user="chai or code with Ashish" btnText="click to read more about me" /> */}
    
  
    </>
  )
}

export default App

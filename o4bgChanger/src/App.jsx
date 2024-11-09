

import {useState} from "react"

// inline css likhne k lie {{}} use krna padta hein
function App() {

  const [color,setColor]= useState('olive')


  return (
   
    <div className="w-full h-screen duration-200"
    
    style = { { backgroundColor : color }}
    >

      <div className="fixed flex flex-wrap text-white justify-center
      
      bottom-12 inset-x-0 px-2" >
        
        <div  className="flex flex-wrap justify-center gap-3 bg-white text-white  px-5 py-4 rounded-xl">
          
          <button 

           onClick= { ()=>setColor("red")}
          className="outline:none px-4 py-1 rounded-full text-black shadow-lg"
          style = {{ backgroundColor: "red"}}>Red

          </button>

          <button 
           onClick= { ()=>setColor("green")}
          className="outline:none px-4 py-1 rounded-full text-black shadow-lg"
          style = {{ backgroundColor: "Green"}}>Green
          
          </button>

          <button 
           onClick= { ()=>setColor("blue")}
          className="outline:none px-4 py-1 rounded-full text-black shadow-lg"
          style = {{ backgroundColor: "Blue"}}>Blue
          
          </button>

          <button 
           onClick= { ()=>setColor("white")}
          className="outline:none px-4 py-1 rounded-full text-black shadow-lg"
          style = {{ backgroundColor: "white"}}>white
          
          </button>

          <button 
           onClick= { ()=>setColor("gray")}
          className="outline:none px-4 py-1 rounded-full text-black shadow-lg"
          style = {{ backgroundColor: "gray"}}>gray
          
          </button>

          <button 
           onClick= { ()=>setColor("olive")}
          className="outline:none px-4 py-1 rounded-full text-black shadow-lg"
          style = {{ backgroundColor: "olive"}}>olive
          
          </button>
          <button 
           onClick= { ()=>setColor("orange")}
          className="outline:none px-4 py-1 rounded-full text-black shadow-lg"
          style = {{ backgroundColor: "orange"}}>orange
          
          </button>

          </div>
          
      </div>
     {/* style={{backgroundColor: "#000"}} */}
  

    </div>
  )
}

export default App

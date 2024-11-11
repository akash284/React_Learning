import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// jese hi ye component load ho to api call krna chahta hu 
// useEffect use hoga
function Github() {

    const data=useLoaderData()
//    const [data,setData] = useState([]) 
//    useEffect( () =>{

//      fetch('https://api.github.com/users/akash284')
//      .then(response =>response.json())
//      .then(data =>{
//         console.log(data);
//         setData(data)
//      })
//    },[])

  return (
    <div className='flex  p-4 bg-gray-800 text-white text-3xl justify-center' >
         <img  src={data.avatar_url} alt="Git picture" width={300} />
      Github followers : {data.followers} 
     
    </div>
  )
}

export default Github

export const githubInforLoader = async () =>{

   const response = await fetch('https://api.github.com/users/akash284')

   return response.json();
}

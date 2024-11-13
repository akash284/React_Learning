import React,{useState,useContext} from 'react'

import UserContext from '../context/UserContext'


// UserContext k andar jo value he voh kese fetch karunga voh sikhna tha is component mein

// step-1 

//UserContext mein hum 2 value pass krre the user,setUser  as a props so that us value se agr koi data chahiye to sirf user se leke voh data lelu
// but agr user m koi value add krni hoto to mere pass method he setUser
// setUser k acces mujhe  useContext se milra hein ==> useContext(UserContext ) 

// step - 2
// data kese bhejte hein?
// data bhejdo setUser k through
// setUser({usenrmae,password})

// step - 3 

// data fetch(lena) heto user use krluga instead of setUser
// see profile component

function Login() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit= (e)=>{
    e.preventDefault()
    setUser({ username,password})

  }
  return (
    <div>
     <h2>Login</h2>
    <input 
    value={username}
    onChange={ (e) => setUsername(e.target.value)}
    type='text' 
    placeholder='username'
    />

     {" "}
    <input 
    value={password}
    onChange={ (e) => setPassword(e.target.value)}
    type='text'
     placeholder='password'
     />

    <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login

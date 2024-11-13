import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInforLoader } from './components/Github/Github.jsx'



// in this we put all objects that are needed 

// '/' ye top level element he iske andr nesting hori he  

// path : '/' element ==>  '/' ye kya render krega voh element humein btana padta hein
// path mein ye btate he ki  ispe jayege to url mein kya display krege
// element mein btate he ki konse element render krna hein 


// '/' k badd kuch ni 
//  /about

//children k andr nesting routes likhte 

// Method - 1
/* 
const router= createBrowserRouter( [

  { 
    path : '/',
    element : <Layout />,
    children: [
      {

        path :"",
        element: <Home/>
      },
      {
         path : "about",
         element: <About/>
      },
      {
        path : "contact",
        element: <Contact/>
     }
    ]
   
  }
])

*/

//Method -2

// nesting ki and nesting ke top level m layout dia hein
// tabhi iske andr sare Outlet apare he
const router =  createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     
     <Route path='' element={<Home/>} />
     <Route path='about' element= {<About/>} />
     <Route path='contact' element = { <Contact/>} /> 
     <Route path='user/:userId' element = { <User/>} /> 
     <Route 
     loader ={githubInforLoader}
     path='github' 
     element = { <Github/>}
      />


    </Route>
  )
)

//RouterProvider ek wrapper he jiske andar humne sab wrap kardia hein
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

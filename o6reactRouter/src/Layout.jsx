import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

//  Outlet is often used with React Router when building nested routes. It serves as a placeholder 
//for rendering child routes in nested routes setup. This is especially useful for layouts where certain components (e.g., header, sidebar,footer) 
//are consistent across multiple pages, but the main content area changes based on the current route.


// Layout ko as a base use krege,iske andr jo bhi chize ayegi voh change hojygi but Header and footer same rhege 

// jaha bhi Outlet dedia mtlb yhape chize change hogi,Header and footer same rhega but iske andr ki chize change hoti rahegi
// hum is layout ko directly use ni krstke ise main.jsx mein btana hoga 
// how routing is happening?
// home k andar aboutus he,contactus hein to ye nesting hori he sab '/' k andar he ==> ise achieve kese kre? go to main.jsx 
function Layout() {
  return (
   <>
    
    <Header />
    <Outlet/>
    <Footer/>
   
   </>
  )
}

export default Layout

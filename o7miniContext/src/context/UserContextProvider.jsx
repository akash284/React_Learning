import React from "react";
import UserContext from "./UserContext";

// children k andr kuch bhi askta hein card component aaye,dashboard aaye,rightsidecomponent aaye,kuch bhi aaye usko render krdege
// isko wrap bhi krna pdega use hito providing bolte hein 

// step-2 wrap the components  
// step-3 provider ko value dedo 
const UserContextProvider = ({children}) => {

    const  [user,setUser] = React.useState(null)
    return (

    <UserContext.Provider  value = { { user,setUser } }>
    {children}
    </UserContext.Provider>
    )

}

export default UserContextProvider;
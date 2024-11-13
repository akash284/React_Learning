
import React from "react";

// step-1 first create the context and ye context deta hein provider,context h kya ek variable provider hi to kar rha hein(so hrek context ek provider hota hein)
// with the help of provider hum components ko wrap kr skte hein and those components will have access to global variable no need to pass in props 
const UserContext = React.createContext()

export default UserContext;
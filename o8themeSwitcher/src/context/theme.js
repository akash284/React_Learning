import { createContext,useContext } from "react";

// default value set krdi,bcz jb bhi user ko theme set krni ho to ek default variable ho
// ye method(lightTheme,darkTheme) mujhe tab milege jb bhi koi context call karega

// this is making me learn ki hum context mein variable + method de skte hein
export const ThemeContext = createContext( {
    themeMode: "light",
    darkTheme:() => {},
    lightTheme:() =>{}
})

// wrap krna hoga jo ki app.jsx mein kia hu 
export const ThemeProvider = ThemeContext.Provider

// custom hooks

// pehle mujhe 2 files import krni padri thi useContext,userContext 
// pr iski help se sirf ek hi file import krni padegi

// ab mujhe sirf useTheme hi use krna hein useTheme automatically useContext,ThemContext use krlega(context k andr jo bhi values h uska access miljyge)
export default function useTheme(){
    return useContext(ThemeContext)
}
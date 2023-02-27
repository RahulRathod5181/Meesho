 import {createContext,useState} from "react"
 
 export const AuthContext = createContext()
 
 function AuthContextProvider({children}){

    const[mainTotal,setTotal]=useState()

    const handleTotal=(n)=>{
        setTotal(n)
        console.log(mainTotal)
    }
    
    return(
       <AuthContext.Provider value = {{mainTotal,handleTotal}}>
        {children}
       </AuthContext.Provider>
    )
 }

 export default AuthContextProvider;
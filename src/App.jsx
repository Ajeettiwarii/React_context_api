import Header from "../Header"  
import React from "react";   
import ClassA from "../classA";
import { createContext } from "react";
  
const data=createContext();
function App() {         
  const name = "Ajeet"
return (
  <>    
  <data.Provider value={name}>
  <ClassA   />  
  </data.Provider>    
     </>
  )
}

export default App ;  
export {data};

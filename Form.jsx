import React from "react";   
import { useState } from "react";  
import "./src/Form.css"
import { useEffect } from "react";
function Form (){    

    const data= {name:"", email:"", password:""}  
    const [intputdata,setinputdata]=useState(data);     
    const [flag,setflag]=useState(false);  
    useEffect(()=>{ 
      console.log("Registered")

    },[flag])

    function handlechange(e){
         setinputdata({...intputdata,[e.target.name]:e.target.value})   
   
        console.log(intputdata);
      
    }  
    function handlesubmit(e){
      e.preventDefault();  
      if(!intputdata.name || !intputdata.email || !intputdata.password){
         alert("All Fields are mendatory")
      }  
      else{
         setflag(true);
      }
    }
    return (    
       <>    
       <pre>{(flag)?<h2>Hello {intputdata.name} you have registered successfully</h2>:""}</pre>
     <form className="container" onSubmit={handlesubmit}>
       
          <div className="header">  
          <h1>Registration  form </h1>
          </div>
      

       <div>
                
                  <input type="text" placeholder="Enter your Name"  name="name"  value={intputdata.name}  onChange={handlechange}/>
       </div>  

       <div>
                
                <input type="text" placeholder="Enter your  Email"  name="email"  value={intputdata.email} onChange={handlechange}/>
     </div>   


     <div>
                
                <input type="text" placeholder="Enter your Password"  name="password"  value={intputdata.password} onChange={handlechange}/>
     </div>  

     <div>
          <button type="submit">Submit</button>
     </div>

     </form>
  </> 
    )

}   

export default Form;  









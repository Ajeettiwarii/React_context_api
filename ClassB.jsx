import React  from "react";   
import {data} from "../newapp/src/App"
function ClassB(){
    return (
        <>   
        <data.Consumer>
            {
                (name)=>{
                    return (
                        <h1>my name is {name}</h1>
                    )
                }
            }
        </data.Consumer>
        </>
    )
}   

export default ClassB ;
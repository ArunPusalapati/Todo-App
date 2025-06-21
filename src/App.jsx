import React from "react";
import ReactDom from "react-dom/client";
import Todo from "./components/Todo";
const Applayout=()=>{
    return(
        <div >
            <Todo />
        </div>
        
    );

}
const root=ReactDom.createRoot((document.getElementById("root")))
root.render(<Applayout/>);
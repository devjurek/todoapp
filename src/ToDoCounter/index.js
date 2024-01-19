import React from "react";
import "./ToDoCounter.css"
import { ToDoContext } from "../ToDoContext";

function TodoCounter(){
    const {
        completedToDos,
        totalToDos,
    } = React.useContext(ToDoContext);

    return (
        <div className="title" >
         <h1 >
         ToDos App
        </h1>

        <h2>  
         Has completado <span>
        {completedToDos}
            </span> de <span>{totalToDos} </span>ToDos
        </h2>
        
        </div>
    );
}

export {TodoCounter};
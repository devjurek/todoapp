import React from "react";
import {ToDoContext} from "../ToDoContext";
import "./ToDoForm.css";

function ToDoForm (){
    const {
        addToDo,
        setOpenModal,
        
    } = React.useContext(ToDoContext);
    const [newToDoValue, setNewToDoValue] = React.useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal (false);
    };

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal (false);
    };

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };
    
    return (
        <form onSubmit={onSubmit}>
            <label>
                Write new ToDo
            </label>
            <textarea 
            placeholder="Create a ToDo App"
            value={newToDoValue}
            onChange={onChange}/>

            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>
                    Cancel
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Add
                </button>
            </div>

        </form>

    )
};

export {ToDoForm};
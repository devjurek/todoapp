import React from "react";
import "./TodoSearch.css";
import { ToDoContext } from "../ToDoContext";

function TodoSearch()
{    const {
        searchValue,
        setSearchValue,
    } = React.useContext(ToDoContext);

    return (
        <input placeholder="Search Task" className="TodoSearch"
        value={searchValue}
        onChange={(event) =>{
            setSearchValue(event.target.value);


        }}/>
    );
}

export {TodoSearch};
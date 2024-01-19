import React from "react";
import { useLocalStorage } from "../App/useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider ({children}) {
    const 
    { item: 
        toDos, 
        saveItem: saveToDos,
        loading,
        error,
    } = useLocalStorage ("todo_v1", []);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    
    const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
            text,
            completed:false,
        });
        saveToDos(newToDos);
    }

    const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
    const totalToDos = toDos.length;
    const searchToDos = toDos.filter((toDo) => { 
        const toDoText = toDo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return toDoText.includes(searchText);});

    const completeToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);
        newToDos[toDoIndex].completed =true;
        saveToDos(newToDos)};

    const deleteToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);
        newToDos.splice(toDoIndex, 1);
        saveToDos(newToDos)};
    
    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchToDos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
            addToDo,
        }}>
            {children}

        </ToDoContext.Provider>
    )
};

export {ToDoContext, ToDoProvider};
import React from "react";
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../ToDoItem';
import { TodoList } from '../ToDoList';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../ToDoCounter';
import { ToDosLoading } from '../ToDosLoading';
import {ToDosError} from '../ToDosError';
import {EmptyToDos} from '../EmptyToDos';
import { ToDoContext } from "../ToDoContext";
import { Modal } from "../Modal/Index";
import { ToDoForm } from "../ToDoForm";

function AppUI(){
  const {
    loading,
    error,
    searchToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal,} = React.useContext(ToDoContext);

    return (  
        <React.Fragment>
        
        <TodoCounter/>
    
        <TodoSearch/>
          <TodoList>
          {loading && (
          <React.Fragment>
          <ToDosLoading />
          <ToDosLoading />
          <ToDosLoading />
          </React.Fragment>)}
          {error && <ToDosError />}
          {(!loading && searchToDos.leght === 0 && <EmptyToDos />)}

          {searchToDos.map(toDo => (
            <TodoItem 
            key={toDo.text} 
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
            />
          ))}
          </TodoList>
        
        <CreateTodoButton setOpenModal={setOpenModal}/>
        
        {openModal && (
        <Modal> 
          <ToDoForm/>
        </Modal>
        )}

        </React.Fragment>)
}

export {AppUI};
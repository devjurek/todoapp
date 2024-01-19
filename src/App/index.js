import React from 'react';
import { AppUI } from "./AppIU";
import "./App.css"
import { ToDoProvider } from '../ToDoContext';

function App() {

    return(

      <ToDoProvider>
      <AppUI/>
      </ToDoProvider>
    );
  }

export default App;
//import './App.css';
import React from "react";
import { TodoCounter } from  './componentes/TodoCounter/TodoCounter';
import { TodoSearch } from  './componentes/Todo_Search/TodoSearch';
import { TodoList } from  './componentes/TodoList/TodoList';
import { TodoItem } from  './componentes/TodoItem/TodoItem';
import {CreateTodoButton}from './componentes/CreateCounter/CreateTodoButton';

const todos = [
  {text: 'Cortar cebolla', completed: false },
  {text: 'Tomar el curso de intro a React', completed: false },
  {text: 'Llorar con la llorona', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {/*iterar el array todos*/}
        {todos.map(todo =>(
          <TodoItem  key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>     
    </React.Fragment>
    
  );
}
export default App;

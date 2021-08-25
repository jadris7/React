//import './App.css';
import React from "react";
import { TodoCounter } from  './componentes/TodoCounter/TodoCounter';
import { TodoSearch } from  './componentes/Todo_Search/TodoSearch';
import { TodoList } from  './componentes/TodoList/TodoList';
import { TodoItem } from  './componentes/TodoItem/TodoItem';
import {CreateTodoButton}from './componentes/CreateTodoButton/CreateTodoButton';

const todos = [
  {text: 'Cortar cebolla', completed: true },
  {text: 'Tomar el curso de intro a React', completed: true },
  {text: 'Llorar con la llorona', completed: false },
  {text: 'Estudiar', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {/*iterar el array todos*/}
        {todos.map(todo =>(
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>     
    </React.Fragment>
    
  );
}
export default App;

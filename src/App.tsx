import React, { useState } from 'react';
import './App.css';
import './index.css'
import { Todoform } from './components/TodoForms';
import { TodoList } from './components/TodoList';


function App() {

  const [todos,setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = (selectedTodo) =>{
    const updateTodos = todos.map((todo => {
      if(todo === selectedTodo)
        return {...todo, complete: !todo.complete}
      return todo;
    })) 
    setTodos(updateTodos);
  }
  

  const addTodo: AddTodo = newTodo => {
    if(newTodo !== ""){
      const newId = Math.floor(Math.random() * 100) + 1;
      const newTodoItem: Todo = { id: newId, nameTask: newTodo,description:'Item',complete: true};
      setTodos([...todos, newTodoItem]);
    }
  }

  const deleteTodo: RemoveTodo = (selectedTodo) => {
    const updateTodos = todos.filter((todo) => (todo !== selectedTodo));
    setTodos(updateTodos);
  }
  
  const editTodo: EditTodo = editedTodo => {
    const updatedTodos = todos.map(todo =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
  };
  
  
  return (
    <div className="todo-app">
      <header>
        <h1 className='text-cyan-950  text-4xl font-medium'>
        Todo App
        </h1>
      </header>
      <Todoform addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );

}
export default App;

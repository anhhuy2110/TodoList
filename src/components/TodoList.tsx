
import React from 'react'
import { TodoListItem } from './TodoListItem'
interface TodoListProps {
    todos : Array<Todo>;
    toggleComplete: ToggleComplete;
    deleteTodo: RemoveTodo;
    editTodo: EditTodo;
}

export const TodoList: React.FC<TodoListProps> = ({todos,toggleComplete,deleteTodo,editTodo}) => {

  return (
    <ul>
        {todos.map( (todo) => (
            <TodoListItem
            key={todo.id}
            todo={todo}
            toggleComplete1={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            />
        ))}
    </ul>
  )
}

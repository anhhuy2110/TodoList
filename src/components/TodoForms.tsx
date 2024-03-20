
import React from 'react';
import { useForm } from 'react-hook-form';

interface TodoformProps {
    addTodo: AddTodo;
}

interface TodoFormData {
    text: string;
   
  }

export const Todoform: React.FC<TodoformProps> = ({addTodo}) => {
    const { register, handleSubmit, reset } = useForm<TodoFormData>();

    const onSubmit = handleSubmit((data: TodoFormData) => {
      addTodo(data.text);
      reset();
    });
    
  return (
    <div className='todo-form flex flex-row justify-center items-center'>
        <input type="text" className='todo-input ' {...register('text')} placeholder='Add your text' />
        <form onSubmit={onSubmit}>
            <button className='todo-button' type="submit">Add Task</button>
        </form>
    </div>
  )
}


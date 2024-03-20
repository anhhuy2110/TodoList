import React, { useState } from 'react';


interface TodoListItemProps {
  todo: Todo;
  toggleComplete1: ToggleComplete;
  deleteTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete1,
  deleteTodo,
  editTodo,
}) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.nameTask);
  const [desInput, setDesInput] = useState<string>('')

  const onDeleteTodo = () => {
    deleteTodo(todo);
  };

  const onSaveEdit = () => {
    const editedTodo = { ...todo, nameTask: inputText, description: desInput};
    editTodo(editedTodo);
    setIsEditOn(false);
  };
  
  const onEditTodo = () => {
    setIsEditOn(true);
  };

  return (
    <ul className="bg-white shadow transition duration-300 ease-in-out overflow-hidden max-w-sm mx-auto mb-8 rounded-2xl ">
    <li>
       {
        isEditOn ? (
          <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}/>
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
              <input
                  placeholder='Type your description'
                  type="text"
                  value={desInput}
                  onChange={(e) => setDesInput(e.target.value)}
            />
              </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">Status: 
              <span
                className={todo.complete ? "text-green-600 cursor-pointer" : "text-red-600 cursor-pointer"}
                onClick={() => toggleComplete1(todo)}
                >
                {todo.complete ? "Active" : "Done"}
             </span>
               </p>
              <a onClick={onSaveEdit} className="font-medium text-indigo-600 hover:text-indigo-500">Save</a>
          </div>
      </div>
        ) : (
          <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{todo.nameTask}</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500"> Description: {todo.description}</p>
          </div>
          {/* Description for Item */}
          <div className="mt-4 flex  justify-between">
          <p className="text-sm font-medium text-gray-500">Status: 
              <span
                className={todo.complete ? "text-green-600 cursor-pointer" : "text-red-600 cursor-pointer"}
                onClick={() => toggleComplete1(todo)}
                >
                {todo.complete ? "Active" : "Done"}
             </span>
               </p>
              <a onClick={onEditTodo} className="font-medium text-indigo-600 hover:text-indigo-500">Edit</a>
              <a onClick={onDeleteTodo} className="font-medium text-indigo-600 hover:text-indigo-500">Delete</a>
          </div>
      </div>
        )
       }
    </li>
</ul>
  );
};

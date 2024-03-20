
type AddTodo = (newTodo: string)=> void;
interface Todo  {
    id: number;
    nameTask: string;
    description?: string;
    complete: boolean;
}

type ToggleComplete = (selectedTodo: Todo)=> void;

type RemoveTodo = (RemoveTodo: Todo) => void;

type EditTodo = (todoToEdit: Todo) => void;




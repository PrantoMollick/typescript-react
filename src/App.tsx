import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';



function App() {
  const [todos, setTodo] = useState<Todo[]>([])

  
  const addTodohandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodo(prevTodos => {
      return prevTodos.concat(newTodo);
    })
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodohandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;

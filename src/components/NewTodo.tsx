import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

import classes from './NewTodo.module.css';


const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const todosCtx = useContext(TodosContext)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if(enteredText.trim().length === 0) {
      //throw and error
      return;
    }

    todosCtx.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input ref={todoTextInputRef} type='text' id='text' />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

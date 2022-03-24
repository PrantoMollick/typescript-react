import React, { useRef } from "react";


const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input ref={todoTextInputRef} type='text' id='text' />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

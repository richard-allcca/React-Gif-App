import React, { useState } from "react";


export const AddCategory = ({ onAddCategory }) => {
  const [ inputValue, setInputValue ] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") return;

    onAddCategory(inputValue);

    setInputValue("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>

      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInput}
      />

      <button type="submit">Agregar</button>

    </form>
  );
};

// export default AddCategory;
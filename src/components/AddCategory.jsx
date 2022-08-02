import React, { useState } from "react";
import { PropTypes } from 'prop-types';


export const AddCategory = ({ onAddCategory }) => {
  const [ inputValue, setInputValue ] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") return;

    setInputValue("");
    onAddCategory(inputValue);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="form">

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

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}

// export default AddCategory;
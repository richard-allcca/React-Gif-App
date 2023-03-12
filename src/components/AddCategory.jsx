import React, { useState } from "react";
import { PropTypes } from 'prop-types';


export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") return;
    // if( inputValue.trim().length <= 1) return;

    onAddCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={ handleSubmit } aria-label="form">

      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ handleInput }
      />

      <button type="submit">Search</button>

    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
};

// export default AddCategory;
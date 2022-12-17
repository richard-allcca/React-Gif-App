import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components/";


const GifApp = () => {

   //?   Aqui NO uso un arreglo para almacenar las categorias
   const [ categories, setCategories ] = useState("");

   const onAddCategory = (newValue) => {

      // if (categories.includes(newValue)) return; // no uso arreglo para almacenar las categorias
      setCategories(newValue);
   };

   return (
      <>
         <h1>Gif-app</h1>

         <AddCategory onAddCategory={(newValue) => onAddCategory(newValue)} />

         <GifGrid categoria={categories} />
         {/* {categories.map((item, id) => {
        return <GifGrid key={id} categoria={item} />
      })} */}
      </>
   );
};

export default GifApp;

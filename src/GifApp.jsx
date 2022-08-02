import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components/';


const GifApp = () => {

  const [ categories, setCategories ] = useState('')

  const onAddCategory = (newValue) => {

    // TODO: format newValue to be a valid category name
    // if (categories.includes(newValue)) return;

    setCategories(newValue)
  }


  return (
    <>
      <h1>Gif-app</h1>

      <AddCategory onAddCategory={(newValue) => onAddCategory(newValue)} />

      <GifGrid categoria={categories} />
      {/* {categories.map((item, id) => {
        return <GifGrid key={id} categoria={item} />
      })} */}

    </>
  )
}

export default GifApp;
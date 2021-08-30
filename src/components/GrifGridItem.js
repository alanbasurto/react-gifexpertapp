import React from 'react'
import {  } from "../";

export const GrifGridItem = ( {  title, url} ) => {

  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p> { title }</p>
    </div>
  )
}


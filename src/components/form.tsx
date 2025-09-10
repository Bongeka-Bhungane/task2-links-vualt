import React from 'react'
// import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import Button from './button'

export default function Form() {
  return (
    <div className="form-container">
      <label htmlFor="">Name:</label>
      <input type="text" placeholder="enter the link name..." required/>
      <label htmlFor="">URL:</label>
      <input type="text" placeholder="enter the link url..." required/>
      <label htmlFor="">Despription:</label>
      <input type="text" placeholder="enter the link description..." required/>
      <label htmlFor="">Tag:</label>
      <input type="text" placeholder="enter the link tag..." />
      <Button name="save" color="#3FF32F" className="btn" />
    </div>
  );
}


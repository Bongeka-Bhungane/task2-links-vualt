// import React from 'react'
// import Button from './button'

// export default function Form() {
//   return (
//     <div className="form-container">
//       <label htmlFor="">Name:</label>
//       <input type="text" placeholder="enter the link name..." required/>
//       <label htmlFor="">URL:</label>
//       <input type="text" placeholder="enter the link url..." required/>
//       <label htmlFor="">Despription:</label>
//       <input type="text" placeholder="enter the link description..." required/>
//       <label htmlFor="">Tag:</label>
//       <input type="text" placeholder="enter the link tag..." />
//       <Button name="save" color="#3FF32F" className="btn" />
//     </div>
//   );
// }

import React, { useState } from "react";
import Button from "./button";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    tag: "",
  });

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle save
  const handleSave = () => {
    // get existing data from localStorage
    const existing = JSON.parse(localStorage.getItem("links") || "[]");
    // add new entry
    const updated = [...existing, formData];
    // save back to localStorage
    localStorage.setItem("links", JSON.stringify(updated));

    // reset form
    setFormData({
      name: "",
      url: "",
      description: "",
      tag: "",
    });

    alert("Saved to localStorage ✅");
  };

  return (
    <div className="form-container">
      <label>Name:</label>
      <input
        type="text"
        name="name"
        placeholder="enter the link name..."
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>URL:</label>
      <input
        type="text"
        name="url"
        placeholder="enter the link url..."
        value={formData.url}
        onChange={handleChange}
        required
      />

      <label>Description:</label>
      <input
        type="text"
        name="description"
        placeholder="enter the link description..."
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>Tag:</label>
      <input
        type="text"
        name="tag"
        placeholder="enter the link tag..."
        value={formData.tag}
        onChange={handleChange}
      />

      <Button
        name="save"
        color="#3FF32F"
        className="btn"
        onClick={handleSave}
      />
    </div>
  );
}

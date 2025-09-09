import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
        

    // ... inside your component's render method
    <div className="search-input-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <FaSearch className="search-icon" />
    </div>
  )
}

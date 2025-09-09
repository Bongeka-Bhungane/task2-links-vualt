import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="search-input-container">
      <input type="text" placeholder="find link...." className="search-input" />
      <FaSearch className="search-icon" />
    </div>
  )
}

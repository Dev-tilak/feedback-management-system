import React from "react";
import { RiSearchLine } from "react-icons/ri";
import "../components/search.css"

const SearchBar = () => {
  return (
    <div className="search-bar">
      <RiSearchLine className="search-icon" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
import React, { useState } from "react";
import "./FilterBar.css";

function FilterBar({ onFilter }) {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="filter-bar">
      <label>Filter by skill:</label>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Enter skill"
      />
    </div>
  );
}

export default FilterBar;

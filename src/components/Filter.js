import React from "react";

function Filter({ button, onToggleButton }) {
 

  return (
    <div id="filter-div">
      <button onClick={onToggleButton} id="good-dog-filter">
        Filter good dogs: {button ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Filter;



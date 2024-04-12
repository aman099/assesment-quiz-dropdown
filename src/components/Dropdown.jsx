import React, { useState } from "react";
import "./Dropdown.css";

function Counter({ menuData }) {
  // const [dropdown, setDropdown] = useState(false);

  // function dropdownHandler() {
  //   setDropdown((dropdown) => !dropdown);
  // }

  return (
    <>
      <div className="heading center">
        <div className="right">
          <p className="show-details">{"Show Details"}</p>
          <span>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
          <div className="drop-down absolute-dropDown">
            <ul>
              {menuData.map((data, idx) => (
                <li key={idx}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Counter;

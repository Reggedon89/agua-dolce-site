import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default props => {
  const [hideState, setHideState] = useState("hide");

  function handleClick() {
    if (hideState === "show") {
      setHideState("hide");
    } else if (hideState === "hide") {
      setHideState("show");
    }
  }
  return (
    <div>
      <div className="header-img" />
      <div className="menu-wrapper">
        <div className="tag-line">
          <p>Space Ordinance Systems</p>
          <p>Film Works</p>
        </div>
        <div className="hamburger-menu">
          <button type="button" onClick={handleClick}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
      <div className={hideState}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/rates">Rates</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

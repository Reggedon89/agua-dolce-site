import React from "react";
export default props => {
  return (
    <div>
      <div className="header-img" />
      <div className="menu-wrapper">
        <div className="tag-line">
          <p>Space Ordinance Systems</p>
          <p>Film Works</p>
        </div>
        <div className="hamburger-menu">
          <button type="button">
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

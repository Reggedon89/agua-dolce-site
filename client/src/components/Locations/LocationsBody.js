import React, { useState } from "react";

export default props => {
  return (
    <div>
      <h1>Locations</h1>
      <div className="search-form">
        <form action="" method="get">
          <input type="text" className="search-bar" />
          <button type="submit" className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

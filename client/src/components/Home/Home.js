import React from "react";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
export default props => {
  return (
    <div>
      <HomeHeader />
      <HomeBody props={props} />
      {/* this is a test commit */}
    </div>
  );
};

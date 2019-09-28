import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFeatureProps } from "../../actions/main.actions";

export default props => {
  const feat_prop = useSelector(appState => appState.feature_properties);

  useEffect(() => {
    getFeatureProps(feat_prop);
  }, []);
  console.log(feat_prop);
  return (
    <div>
      <div className="page-title">
        <h1>Home</h1>
      </div>
      <div className="featured-properties">
        <h3>Featured Properties</h3>
        <div className="property-desc">
          {/* {feat_prop.locations.map(item => (
            <div className="properties_featured">
              {console.log(item)}
              <h2>{item.locations.name}</h2>
              <p>{item.description}</p>
            </div>
          ))} */}
          {/* <div className="prop-img" />
          <p>
            The most visible set at S.O.S is our L10-11, full size, jet
            fuselage. The interior is vintage 1974, complete with ashtrays. As
            constructed L10-11 bathrooms were at the very rear of the plane in a
            curved row. All we did is bring the row of bathrooms forward so it's
            easy to film both inside and outside the bathrooms.
          </p>*/}
        </div>
      </div>
    </div>
  );
};

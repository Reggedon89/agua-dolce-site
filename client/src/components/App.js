import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import "../styles/App.css";
import { Provider } from "react-redux";
import store from "../store";
import Home from "./Home/Home";
import Locations from "./Locations/Locations";

export default props => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/locations" component={Locations} />
        </div>
      </Router>
    </Provider>
  );
};

import store from "../store";
import axios from "axios";

export function getFeatureProps() {
  axios.get("/api/feature_properties").then(resp => {
    store.dispatch({
      type: "FEATURE_PROPERTIES",
      payload: resp.results
    });
  });
}

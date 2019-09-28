import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFeatureProps } from "../../actions/main.actions";
import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/auth";
import "@firebase/storage";

const config = {
  apiKey: "AIzaSyDLtGN5Hf2Q-boxgQrnlbKnSbBkGDOMWic",
  authDomain: "agua-dulce-66f43.firebaseapp.com",
  databaseURL: "https://agua-dulce-66f43.firebaseio.com",
  projectId: "agua-dulce-66f43",
  storageBucket: "agua-dulce-66f43.appspot.com",
  messagingSenderId: "551008570896",
  appId: "1:551008570896:web:c63d7334838c40fda7c495",
  measurementId: "G-3P9NVFH4Z6"
};

firebase.initializeApp(config);

export default props => {
  const feat_prop = useSelector(appState => appState.feature_properties);
  const storage = firebase.storage();
  const files = ["eMystery Mesa 2.jpeg", "plane1e.jpeg"];
  useEffect(() => {
    getFeatureProps(feat_prop);
  }, [feat_prop.data]);
  return (
    <div>
      <div className="page-title">
        <h1>Home</h1>
      </div>
      <div className="featured-properties">
        <h3>Featured Properties</h3>
        <div className="property-desc">
          {console.log(feat_prop)}
          {feat_prop.map(item => (
            <div className="properties_featured">
              {console.log(item)}
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))}

          {files.map(filename => {
            storage
              .ref(`/covers/${filename}`)
              .getDownloadURL()
              .then(url => {
                console.log("Got download url: ", url);
              });
          })}
        </div>
      </div>
    </div>
  );
};

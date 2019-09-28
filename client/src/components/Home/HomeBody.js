import React, { useState, useEffect } from "react";
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

  const files = ["eMystery Mesa 2.jpeg", "plane1e.jpeg", "sierrainn (5).jpeg"];

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
            <div key={item.id} className="properties_featured">
              <h2>{item.name}</h2>
              {item.name === "Mystery Mesa" ? (
                // this is a temporary fix future version should map through data base and connect each image to the matching  database entry
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/agua-dulce-66f43.appspot.com/o/eMystery%20Mesa%202.jpeg?alt=media&token=f5a16ed4-5545-4e33-a6f0-5f4b5846ba1f"
                  target="_blank"
                >
                  <img
                    className="feature-props"
                    alt=""
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/agua-dulce-66f43.appspot.com/o/eMystery%20Mesa%202.jpeg?alt=media&token=f5a16ed4-5545-4e33-a6f0-5f4b5846ba1f"
                    }
                  ></img>
                </a>
              ) : item.name === "L10-11" ? (
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/agua-dulce-66f43.appspot.com/o/plane1e.jpeg?alt=media&token=e241ec6e-09af-4951-b686-31e9ca015372"
                  target="_blank"
                >
                  <img
                    className="feature-props"
                    alt=""
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/agua-dulce-66f43.appspot.com/o/plane1e.jpeg?alt=media&token=e241ec6e-09af-4951-b686-31e9ca015372"
                    }
                  ></img>
                </a>
              ) : item.name === "Sierra Inn" ? (
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/agua-dulce-66f43.appspot.com/o/sierrainn%20(5).jpeg?alt=media&token=729fb9d3-cab7-4a1f-8248-9bdfa1f7eca3"
                  target="_blank"
                >
                  <img
                    className="feature-props"
                    alt=""
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/agua-dulce-66f43.appspot.com/o/sierrainn%20(5).jpeg?alt=media&token=729fb9d3-cab7-4a1f-8248-9bdfa1f7eca3"
                    }
                  ></img>
                </a>
              ) : (
                ""
              )}
              <p>{item.description}</p>
            </div>
          ))}
          {/* {files.map(filename => {
            storage
              .ref(`${filename}`)
              .getDownloadURL()
              .then(url => {
                return (
                  <div>
                    <img
                      alt=""
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/agua-dulce-66f43.appspot.com/o/eMystery%20Mesa%202.jpeg?alt=media&token=f5a16ed4-5545-4e33-a6f0-5f4b5846ba1f"
                      }
                    ></img>
                    {console.log("Got download url: ", url)}
                  </div>
                );
              });
          })} */}
        </div>
      </div>
    </div>
  );
};

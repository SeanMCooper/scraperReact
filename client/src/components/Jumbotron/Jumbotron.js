import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, clear: "both", paddingTop: 18, textAlign: "center", backgroundColor: "gray" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;

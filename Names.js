import React from "react";
import { NameItem } from "./NameItem";

export const Names = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">please enter something!</h3>
      {props.names.length === 0
        ? "nothing to display"
        : props.names.map((name) => {
            return <NameItem name={name} onDelete={props.onDelete} />;
          })}
    </div>
  );
};

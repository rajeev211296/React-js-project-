import React from "react";
import Main from "./MyComponents/Main";
import { Names } from "./MyComponents/Names.js";
import { AddName } from "./MyComponents/AddName";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  let initName;
  if (localStorage.getItem("names") === null) {
    initName = [];
  } else {
    initName = JSON.parse(localStorage.getItem("names"));
  }
  const onDelete = (name) => {
    console.log("iam on delete", name);
    setNames(
      names.filter((e) => {
        return e !== name;
      })
    );
    console.log("deleted", names);
    localStorage.setItem("names", JSON.stringify(names));
  };
  const addName = (name) => {
    console.log("i am adding this Name", name);

    const myName = {
      name: name,
    };
    setNames([...names, myName]);
    console.log(myName);
  };

  const [names, setNames] = useState(initName);
  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);
  return (
    <div className="top">
      <Main />
      <AddName addName={addName} />
      <Names names={names} onDelete={onDelete} />
    </div>
  );
}

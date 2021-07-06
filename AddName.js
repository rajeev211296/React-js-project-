import React, { useState } from "react";

export const AddName = ({ addName }) => {
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("name cannot be blank");
    } else {
      addName(name);
      setName("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add Your Name</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="name"
          />
        </div>
      </form>
    </div>
  );
};

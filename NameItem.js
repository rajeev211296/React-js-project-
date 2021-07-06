import React from "react";

export const NameItem = ({ name, onDelete }) => {
  return (
    <>
      <div>
        <h4>{name.name}</h4>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            onDelete(name);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};

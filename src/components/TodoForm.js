import React, { useContext, useState } from "react";
import Store from "../context";

export default function TodoForm() {
  const { dispatch } = useContext(Store);

  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.
  const [todo, setTodo] = useState("");

  return (
    <div className="row">
      <div className="col-md-12">
        <br />
        <div className="input-group">
          <input
            className="form-control"
            value={todo}
            autoFocus={true}
            placeholder="Enter new todo"
          />
          <div className="input-group-append">
            <button className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

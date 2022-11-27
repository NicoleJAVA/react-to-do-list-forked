import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  console.log("test: ", task); // todoo

  return (
    <div className="add-task">
      <input type="text" onChange={handleChange} className="task-input" />
      <button className="add-btn">Add</button>
    </div>
  );
};
console.clear(); // todoo
export default Todo;

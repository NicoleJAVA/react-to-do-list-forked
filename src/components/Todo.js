import React, { useState } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { addTask } from "../redux/todo/slice";
import { Button, Form } from "react-bootstrap";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

const Todo = (props) => {
  const [newTask, setNewTask] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [edittingItemId, setEdittingItemId] = useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      item: newTask,
      completed: false,
    };
    props.addTask(item);
  };

  const changeEdittingItemId = (id) => {
    setEdittingItemId(id);
  };

  return (
    <div className="container-fluid">
      <div className="theme-card">
        <h3 className="mb-4">ToDo List</h3>
        <div className="d-flex align-items-center mb-4">
          <input
            type="text"
            onChange={handleChange}
            className="add-input mr-2"
          />
          <Button
            variant="primary"
            className="btn-theme"
            onClick={handleAddTask}
          >
            新增
          </Button>
        </div>
        <ul>
          {props.tasks.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              edittingItemId={edittingItemId}
              changeEdittingItemId={changeEdittingItemId}
              isEditMode={isEditMode}
              setIsEditMode={setIsEditMode}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

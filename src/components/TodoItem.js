import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask, completeTask } from "../redux/todo/slice";
import Form from "react-bootstrap/Form";
import "../scss/component/todoItem.scss";

const TodoItem = ({
  item,
  edittingItemId,
  changeEdittingItemId,
  isEditMode,
  setIsEditMode,
}) => {
  const inputRef = useRef(true);
  const checkboxRef = useRef(true);
  const dispatch = useDispatch();

  const handleRemoveTask = (id) => {
    if (isEditMode && edittingItemId === item.id) return;

    dispatch(removeTask(id));
  };

  const handleEditTask = (id) => {
    if (isEditMode) return;

    setIsEditMode(true);
    changeFocus();
    changeEdittingItemId(id);
  };

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const handleSaveTask = (id, value) => {
    dispatch(updateTask({ id, item: value }));
    inputRef.current.disabled = true;
    setIsEditMode(false);
    changeEdittingItemId("");
  };

  const handleCompleteTask = (id, checkbox) => {
    dispatch(completeTask({ id: id, completed: checkbox.checked }));
  };

  return (
    <li key={item.id} className="">
      <input
        ref={checkboxRef}
        type="checkbox"
        className="style-checkbox"
        id={`check-${item.id}`}
        onChange={() => handleCompleteTask(item.id, checkboxRef.current)}
      />
      <label htmlFor={`check-${item.id}`}></label>
      <Form.Control
        className={
          "edit-input " + (item.completed ? "completed-task" : "todo-task")
        }
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        type="text"
      />
      <button onClick={() => handleRemoveTask(item.id)}>Delete</button>
      {isEditMode && edittingItemId === item.id ? (
        <button onClick={() => handleSaveTask(item.id, inputRef.current)}>
          Save
        </button>
      ) : (
        <button onClick={() => handleEditTask(item.id)}>Edit</button>
      )}
    </li>
  );
};

export default TodoItem;

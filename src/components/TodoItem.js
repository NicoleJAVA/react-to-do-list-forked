import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask, completeTask } from "../redux/todo/slice";
import Form from "react-bootstrap/Form";
import "../scss/component/todoItem.scss";
import { Button } from "react-bootstrap";

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

  const getTaskStyle = (input, completed) => {
    if (input.disabled) {
      return completed ? "completed-task" : "todo-task";
    } else {
      return "";
    }
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
          "edit-input task mr-2 " +
          getTaskStyle(inputRef.current, item.completed)
        }
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        type="text"
      />
      <Button
        className="btn-crud mr-2"
        variant="outline-secondary"
        onClick={() => handleRemoveTask(item.id)}
      >
        刪除
      </Button>
      {isEditMode && edittingItemId === item.id ? (
        <Button
          className="btn-crud mr-2"
          variant="outline-secondary"
          onClick={() => handleSaveTask(item.id, inputRef.current)}
        >
          更新
        </Button>
      ) : (
        <Button
          className="btn-crud mr-2"
          variant="outline-secondary"
          onClick={() => handleEditTask(item.id)}
        >
          編輯
        </Button>
      )}
    </li>
  );
};

export default TodoItem;

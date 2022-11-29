import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../redux/todo/slice";

const TodoItem = ({
  item,
  edittingItemId,
  changeEdittingItemId,
  isEditMode,
  setIsEditMode,
}) => {
  const inputRef = useRef(true);
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

  return (
    <li key={item.id}>
      <input
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

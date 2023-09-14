import React from "react";

const ToDoComponent = ({ text }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
    </div>
  );
};
export default ToDoComponent;

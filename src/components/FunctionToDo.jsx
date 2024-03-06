import { useRef, useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import "./FunctionToDo.css";
function Todo({ onNewItem }) {
  // const [todoN, setTodoN] = useState("");
  // const [todoD, setTodoD] = useState("");
  const toDoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoN(event.target.value);
  //   // noOfUpdates.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setTodoD(event.target.value);
  //   // console.log(noOfUpdates);
  // };
  const handleAddButton = (event) => {
    const todoN = toDoNameElement.current.value;
    const todoD = dueDateElement.current.value;
    console.log(todoN + todoD);
    onNewItem(todoN, todoD);
    toDoNameElement.current.value = "";
    dueDateElement.current.value = "";
    // setTodoD();
    // setTodoN();
  };

  return (
    <div className="container text-center">
      <div className="row myrow">
        <div className="col-6">
          <input
            type="text"
            ref={toDoNameElement}
            placeholder="Enter your todo"
            className="inputTodo"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            className="inputDate"
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success mybutton but"
            onClick={handleAddButton}
          >
            <IoAddSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todo;

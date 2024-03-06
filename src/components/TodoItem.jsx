import { MdDelete } from "react-icons/md";
import "./TodoItem.css";
function TodoItem({ todoName, todoDate, handleDeleteItems }) {
  return (
    <div className="container">
      <div className="todoCont">
        <div className=" textDisplay">{todoName}</div>
        <div className=" dateDisplay">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger mybutton"
            onClick={() => handleDeleteItems(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;

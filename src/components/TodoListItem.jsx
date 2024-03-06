import TodoItem from "./TodoItem";
import styles from "./TodoListItem.module.css";
const TodoListItem = ({ todoList, handleDeleteItems }) => {
  return (
    <>
      <div className={styles.ItemContainer}>
        {todoList.map((item) => {
          return (
            <TodoItem
              key={item.name}
              handleDeleteItems={handleDeleteItems}
              className=""
              todoName={item.name}
              todoDate={item.dueDate}
            />
          );
        })}
      </div>
    </>
  );
};
export default TodoListItem;

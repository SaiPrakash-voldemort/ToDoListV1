import AppName from "./components/AppName";
import Todo from "./components/FunctionToDo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoListItem from "./components/TodoListItem";
import { useState } from "react";
import WelcomMessage from "./components/WelcomMessage";
function App() {
  const [currentToDoList, setcurrentToDo] = useState([]);
  const onNewItem = (itemTodo, itemDate) => {
    // setcurrentToDo((curVal) => {
    //   const newTodoItems = [...curVal, { name: itemTodo, dueDate: itemDate }];
    //   return newTodoItems;
    // });
    setcurrentToDo((currVal) => [
      ...currVal,
      { name: itemTodo, dueDate: itemDate },
    ]);
  };
  const handleDeleteItems = (todoName) => {
    const newTItems = currentToDoList.filter((item) => item.name !== todoName);
    setcurrentToDo(newTItems);
    console.log(`Iten deleted:${todoName}`);
  };

  return (
    <div className="Todo_Container">
      <center>
        <AppName />
        <Todo onNewItem={onNewItem} />
        <WelcomMessage toList={currentToDoList} />
        <TodoListItem
          todoList={currentToDoList}
          handleDeleteItems={handleDeleteItems}
        ></TodoListItem>
      </center>
    </div>
  );
}

export default App;

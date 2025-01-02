import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function YourTodo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = (e, id) => {
    let t = todos.find((item) => item.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter((i) => {
      return i.id !== id;
    });
    setTodos(newTodos);
  };

  const handleDelete = (e, id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(), todo, isComplete: false }]);
    setTodo("");
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  return (
    <div className="m-10">
      <div className="h-[80vh] w-full bg-neutral-900 rounded-xl p-8 text-white">
        <div className="text-white font-normal text-2xl">Add a Todo</div>

        <div>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-80 ml-4 p-2 pl-3 text-black rounded-2xl mr-4 mt-2 hover:bg-slate-200"
            placeholder="Enter your todo"
          />
          <button
            onClick={handleAdd}
            className="bg-white h-10 w-20 rounded-lg text-black hover:bg-slate-200"
          >
            Add
          </button>
        </div>

        <div className="m-3 text-xl w-[80vw] ">
          Your Todos
          <br />
          {todos.length === 0 && (
            <div className="mt-5">No todos to display</div>
          )}
          {todos.map((item, index) => {
            return (
              <div className="mt-5 flex justify-between w-[80vw]" key={index}>
                <div className={item.isComplete ? "line-through" : " "}>
                  <input
                    type="checkbox"
                    value={todo.isComplete}
                    className="mx-3"
                    name={item.id}
                    onChange={handleCheckbox}
                  />
                  {item.todo}
                </div>
                <div>
                  <button
                    onClick={(e) => {
                      handleEdit(e, item.id);
                    }}
                    className="bg-white h-10 w-20 rounded-lg mx-3 text-black hover:bg-slate-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="bg-white h-10 w-20 rounded-lg text-black hover:bg-slate-200 text-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

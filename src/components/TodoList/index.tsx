import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { Todo } from "../../hooks/useTodo";
import IconCheck from "/images/icon-check.svg";
import IconX from "/images/icon-cross.svg";

interface TodoListProps {
  todoList: Todo[];
  toggleTodoCompleted: (id: number) => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
  filter: "all" | "active" | "completed";
  clearCompleted: () => void;
  deleteTodoItem: (id: number) => void;
}

const TodoList = ({
  todoList,
  toggleTodoCompleted,
  setFilter,
  filter,
  clearCompleted,
  deleteTodoItem,
}: TodoListProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {todoList.map((todo) => (
            <li
              className={`p-6 border-b ${themeConfig[theme].todo.borderColor} flex justify-between`}
              key={todo.id}
            >
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-px">
                  <button
                    onClick={() => toggleTodoCompleted(todo.id)}
                    className={`w-full h-full border ${
                      themeConfig[theme].todo.borderColor
                    } ${
                      themeConfig[theme].todo.backgroundColor
                    } rounded-full cursor-pointer ${
                      todo.completed
                        ? "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]"
                        : ""
                    }`}
                  >
                    {todo.completed && (
                      <img
                        src={IconCheck}
                        alt="Icone Check"
                        className="h-2 w-2 m-auto"
                      />
                    )}
                  </button>
                </span>

                <p
                  className={`${themeConfig[theme].todo.textColor} ${
                    todo.completed ? "line-through opacity-50" : ""
                  }`}
                >
                  {todo.text}
                </p>
              </div>
              <button onClick={() => deleteTodoItem(todo.id)}>
                <img
                  src={IconX}
                  alt="Remover Item da Lista"
                  className="h-6 w-6 cursor-pointer"
                />
              </button>
            </li>
          ))}
        </ul>

        <div
          className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}
        >
          <p>{todoList.length} items total</p>

          <div className="hidden sm:flex gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`${
                filter === "all" ? "text-bright-blue" : ""
              } cursor-pointer ${
                theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue-hover"
                  : "hover:text-neutral-very-dark-grayish-blue"
              } `}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`${
                filter === "active" ? "text-bright-blue" : ""
              } cursor-pointer ${
                theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue-hover"
                  : "hover:text-neutral-very-dark-grayish-blue"
              } `}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`${
                filter === "completed" ? "text-bright-blue" : ""
              } cursor-pointer ${
                theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue-hover"
                  : "hover:text-neutral-very-dark-grayish-blue"
              } `}
            >
              Completed
            </button>
          </div>

          <button
            onClick={clearCompleted}
            className={`cursor-pointer ${
              theme === "dark"
                ? "hover:text-neutral-light-grayish-blue-hover"
                : "hover:text-neutral-very-dark-grayish-blue"
            } `}
          >
            Clear Completed
          </button>
        </div>
      </div>

      <div
        className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden`}
      >
        <button
          onClick={() => setFilter("all")}
          className={`${
            filter === "all" ? "text-bright-blue" : ""
          } cursor-pointer ${
            theme === "dark"
              ? "hover:text-neutral-light-grayish-blue-hover"
              : "hover:text-neutral-very-dark-grayish-blue"
          } `}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`${
            filter === "active" ? "text-bright-blue" : ""
          } cursor-pointer ${
            theme === "dark"
              ? "hover:text-neutral-light-grayish-blue-hover"
              : "hover:text-neutral-very-dark-grayish-blue"
          } `}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`${
            filter === "completed" ? "text-bright-blue" : ""
          } cursor-pointer ${
            theme === "dark"
              ? "hover:text-neutral-light-grayish-blue-hover"
              : "hover:text-neutral-very-dark-grayish-blue"
          } `}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default TodoList;

import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-Use-Reducer/todoReducer";

export const useTodo = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add todo",
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {

        dispatch({
            type: "[TODO] Remove todo",
            payload: id
        });
    }

    const handleonToggleTodo = (id) => {
        dispatch({
            type: "[TODO] Toggle todo",
            payload: id
        });

    }


    return {
        todos,
        counterTodo: todos.length,
        counterPendients: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleonToggleTodo
    }


}
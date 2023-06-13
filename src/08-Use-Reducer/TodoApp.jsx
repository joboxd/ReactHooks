import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {

    //useTodo
    //handleDeleteTodo handleonToggleTodo handleNewTodo
    const { todos, counterTodo, counterPendients, handleDeleteTodo, handleNewTodo, handleonToggleTodo, } = useTodo();

    return (
        <>
            <h1>Todo App: {counterTodo}, <small>pendientes: {counterPendients}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleonToggleTodo}
                    />
                </div>
                <div className=" col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>


        </>
    )
}
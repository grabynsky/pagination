import React, {FC} from 'react';
import {ITodo} from "../../models/ITodo";
import TodoComponent from "../Todo/TodoComponent";

type TodosProps = {
    todos: ITodo[];
}

const TodosComponent: FC<TodosProps> = ({todos}) => {
    return (
        <div>
            {
                // todos.map(item => (<div key={item.id}> {item.todo}</div>))
                todos.map(item => <TodoComponent key={item.id} item={item} />)
            }
        </div>
    );
};

export default TodosComponent;
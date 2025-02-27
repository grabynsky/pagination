import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../../models/ITodo";
import TodoComponent from "../Todo/TodoComponent";
import {useSearchParams} from "react-router-dom";
import {apiService} from "../../services/api/api.service";

type TodosProps = {
    todos: ITodo[];
}

const TodosComponent: FC<TodosProps> = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page');

        //todo fn to call API with come prams
        if (page) {
            apiService.todo
                .getAll(+page)
                .then(value => {
                        setTodos(value.todos);
                        const lastId = value.todos[value.todos.length - 1].id;
                        lastId >= value.total ? setFlag(true) : setFlag(false);
                    }
                );

        }

    }, [query]);
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
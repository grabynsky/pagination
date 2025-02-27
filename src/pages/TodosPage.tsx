import React, {useEffect, useState} from 'react';
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api/api.service";
import TodosComponent from "../components/TodosComponent/TodosComponent";
import {ITodo} from "../models/ITodo";

const TodosPage = () => {
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
            <TodosComponent todos={todos}/>
            <PaginationComponent flag={flag}/>
        </div>
    );
};

export default TodosPage;
import React, {FC} from 'react';
import {ITodo} from "../../models/ITodo";

type Props ={
    item: ITodo;
}

const TodoComponent: FC<Props> = ({item}) => {
    return (
        <div>
            {
                item.todo
            }
        </div>
    );
};

export default TodoComponent;
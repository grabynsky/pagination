import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'todos'}>Todos</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;
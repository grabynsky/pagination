import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type PaginationProps = {
    flag: boolean
}

const PaginationComponent: FC<PaginationProps> = ({flag}) => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const onClickPrevHandler = () => {
        const page = query.get('page');
        if (page && +page >0 ) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()});
        }
    };

    const onClickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()});
        }
    };

    return (
        <div>
            <button onClick={onClickPrevHandler}>prev</button>
            <button onClick={onClickNextHandler} disabled={flag}>next</button>
        </div>
    );
};

export default PaginationComponent;
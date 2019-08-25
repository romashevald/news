'use strict';

import React from 'react';
import {pNumberRequired, pStringRequired, SORT_BY, STANDART_START_PAGE} from "../constants";
import {calcPageCount} from "../utils";

export const Pagination = ({obtainNewsPage, currentPageNumber, sortBy}) => {
    let controls = [];
    const pageCount = calcPageCount();
    for (let i = 1; i <= pageCount; i++) {
        const baseClassName = 'pagination-controls-button';
        const activeClassName = i === currentPageNumber ? `${baseClassName}--active` : '';
        controls.push(
            <div className={`${baseClassName} ${activeClassName}`}
                 key={i}
                 onClick={() => obtainNewsPage(i, sortBy)}>
                {i}
            </div>
        );
    }

    return (
        <div className='pagination-controls'>
            {controls}
        </div>
    );
};

Pagination.propTypes = {
    currentPageNumber: pNumberRequired,
    sortBy: pStringRequired
};

Pagination.defaultProps = {
    currentPageNumber: STANDART_START_PAGE,
    sortBy: SORT_BY.LEXICAL
};





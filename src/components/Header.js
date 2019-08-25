'use strict';

import React, { useState,useEffect} from 'react';
import {pFuncRequired, pStringRequired, SORT_BY} from "../constants";

export const Header = ({sortBy,handleChange}) => {
    const [sort, setSortBy] = useState(sortBy);
    useEffect(() => handleChange(sort),[sort]);
    return (
        <header className='page-header'>
                <div className='title-news'><h3>News</h3></div>
                <div className='container-select'>
                    <select onChange={e => setSortBy(e.target.value)}
                            name='sort'
                            value={sort}>
                        <option value={SORT_BY.LEXICAL}>{SORT_BY.LEXICAL}</option>
                        <option value={SORT_BY.DATE}>{SORT_BY.DATE}</option>
                    </select>
                </div>
        </header>
    );
};

Header.propTypes={
    sortBy: pStringRequired,
    handleChange: pFuncRequired,
};

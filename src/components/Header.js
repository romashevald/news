'use strict';

import React, {Component, useState,useEffect} from 'react';
import {pFuncRequired, pStringRequired, SORT_BY} from "../constants";

export const Header = ({sortBy,handleChange}) => {
    const [sort, setSortBy] = useState(sortBy);
    useEffect(() => handleChange(sort),[sort]);
    return (
        <header>
            <div className='page-header'>
                <div className='title-news'><h3>News</h3></div>
                <div>
                    <select onChange={e => setSortBy(e.target.value)}
                            name='sort'
                            value={sort}>
                        <option value={SORT_BY.LEXICAL}>{SORT_BY.LEXICAL}</option>
                        <option value={SORT_BY.DATE}>{SORT_BY.DATE}</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

Header.propTypes={
    sortBy: pStringRequired,
    handleChange: pFuncRequired,
};

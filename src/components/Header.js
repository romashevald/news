import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {news} from "../data/news";
import {SORT_BY} from "../constants";

export const Header = ({handleChange, sortBy}) => {
    return (
        <header>
            <div className='page-header'>
                <div className='title-news'><h3>News</h3></div>
                <div>
                    <select onChange={handleChange}
                            name='sortBy'
                            value={sortBy}>
                        <option value={SORT_BY.LEXICAL}>{SORT_BY.LEXICAL}</option>
                        <option value={SORT_BY.DATE}>{SORT_BY.DATE}</option>
                    </select>
                </div>
            </div>
        </header>);

};

Header.propTypes = {
    handleChange: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
};
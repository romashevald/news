import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {list} from "../data/list";
import {SORT_BY} from "../constants";

export const Header = ({handleChange, sortBy}) => {
    return (
        <div className=''>
            <div>News</div>
            <div>
                <select onChange={handleChange}
                        name='sortBy'
                        value={sortBy}>
                    <option value={SORT_BY.ALPH}>{SORT_BY.ALPH}</option>
                    <option value={SORT_BY.DATE}>{SORT_BY.DATE}</option>
                </select>
            </div>
        </div>);

};

Header.propTypes = {
    handleChange: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
};
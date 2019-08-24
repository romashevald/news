import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {news} from "../data/news";
import {SORT_BY} from "../constants";

export const Header = ({handleChange, sortBy}) => {
    return (
       12);

};

Header.propTypes = {
    handleChange: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
};
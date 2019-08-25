'use strict';

import PropTypes from 'prop-types';

export const SORT_BY = {
    LEXICAL: 'Lexical',
    DATE: 'Date'
};

export const STANDARD_PAGE_SIZE = 3;
export const STANDARD_START_PAGE = 1;

export const TIMEOUT = 1000;

export const pFuncRequired = PropTypes.func.isRequired;
export const pNumberRequired = PropTypes.number.isRequired;
export const pArrayRequired = PropTypes.array.isRequired;
export const pStringRequired = PropTypes.string.isRequired;


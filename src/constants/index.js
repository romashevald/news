'use strict';

import PropTypes from 'prop-types';

export const SORT_BY = {
    LEXICAL: 'Lexical',
    DATE: 'Date'
};

export const STANDART_PAGE_SIZE = 3;
export const STANDART_START_PAGE = 1;

export const TIMEOUT = 1000;

export const pFuncRequired = PropTypes.func.isRequired;
export const pNumberRequired = PropTypes.number.isRequired;
export const pBoolRequired = PropTypes.bool.isRequired;
export const pArrayRequired = PropTypes.array.isRequired;
export const pObjectRequired = PropTypes.object.isRequired;
export const pStringRequired = PropTypes.string.isRequired;
export const pNumberOrStringRequired = PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired;


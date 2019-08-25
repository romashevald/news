'use strict';

import React from 'react';

require(`../static/img/calendar.svg`);
require(`../static/img/eye.svg`);

const Icons = ({symbol, className, style}) => (
    <svg className={className} style={style}>
        <use xlinkHref={'#smb-' + symbol}/>
    </svg>
);

export const IconCalendar = ({className}) => <Icons symbol="calendar"
                                                    className={className}/>;

export const IconViews = ({className}) => <Icons symbol="eye"
                                                 className={className}/>;


export const IconPreloaderCat = () =>
    <div className="box">
        <div className="cat">
            <div className="cat__body"/>
            <div className="cat__body"/>
            <div className="cat__tail"/>
            <div className="cat__head"/>
        </div>
    </div>;

export const IconPreloader = () =>
    <div className='lds'>
        <div className="lds-roller">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>

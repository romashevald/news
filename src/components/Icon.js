'use strict';

import React, {Component} from 'react';

require(`../static/img/logo.svg`);
require(`../static/img/calendar.svg`);
require(`../static/img/eye.svg`);

const Icon = ({symbol, className, style}) => {
    return (
        <svg className={className} style={style}>
            <use xlinkHref={'#smb-' + symbol}/>
        </svg>
    );
};

export const IconLogo = ({className}) => {
    return <Icon symbol="logo"
                 className={className}
                 style={{width: '100px', height: '100px'}}/>;
};

export const IconCalendar = ({className}) => {
    return <Icon symbol="calendar"
                 className={className}
    />;
};

export const IconViews = ({className}) => {
    return <Icon symbol="eye"
                 className={className}
    />;
};

export const IconPreloader = () =>
    <div className="box">
        <div className="cat">
            <div className="cat__body"></div>
            <div className="cat__body"></div>
            <div className="cat__tail"></div>
            <div className="cat__head"></div>
        </div>
    </div>;
import React, {Component} from 'react';

export const FragmentNews = ({data}) => {
    return (
        <div className='example'>
            {data.map((item, i) => {
                const {id, title, caption, date, views, img, link} = item;
                return (
                    <div className='example__item' key={i}>
                        <div>{`id: ${id}`}</div>
                        <div>{title}</div>
                        <div>{caption}</div>
                        <div>{date}</div>
                        <div>{views}</div>
                        <div>{img}</div>
                        <div>{link}</div>
                    </div>
                );
            })}
        </div>);

};
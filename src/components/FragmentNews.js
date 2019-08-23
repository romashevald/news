import React, {Component} from 'react';
import {list} from "../data/list";

export const FragmentNews = () => {
    return (
        <div>
            {list.map((news, i) => {
                const {id, title, caption, date, views, img, link} = news;
                return (
                    <div key={i}>
                        <div>{id}</div>
                        <div>{title}</div>
                        <div>{caption}</div>
                        <div>{date}</div>
                        <div>{views}</div>
                        <div>{img}</div>
                        <div>{link}</div>
                    </div>
                );
            })}
        </div>
    );
};
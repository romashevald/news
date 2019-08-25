import React from 'react';
import {IconCalendar, IconViews} from "./Icons";
import {timestampToData} from "../utils";

export const FragmentsNews = ({data}) => {
    return (
        <div className='all-news'>
            {data.map((item, i) => {
                const { title, caption, date, views, img, link} = item;
                return (
                    <div className='fragment-news' key={i}>
                        <div>
                            <img className='image-news' src={img}/>
                        </div>
                        <div className='info-news'>
                            <div className='title'>{title}</div>
                            <div className='date-views'>
                                <div className='date'>
                                    <IconCalendar className='icon-calendar'/>
                                    {timestampToData(date)}
                                </div>
                                <div className='views'><IconViews className='icon-views'/>{views}</div>
                            </div>
                            <div className='caption'>{caption}</div>
                            <div className='link'>
                                <a href={link} target="_blank">Read more</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
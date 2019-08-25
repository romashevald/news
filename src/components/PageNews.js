'use strict';

import React, {Component} from 'react';
import {FragmentsNews} from "./FragmentsNews";
import {Header} from "./Header";
import {SORT_BY, STANDART_START_PAGE} from "../constants";
import {getNews} from "../utils/news-service";
import {IconPreloader} from "./Icons";
import {Pagination} from "./Pagination";

class PageNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentPageNumber: STANDART_START_PAGE,
            sortBy: SORT_BY.LEXICAL,
            isLoading: false
        };
        this._handleChange = this._handleChange.bind(this);
        this._obtainNewsPage = this._obtainNewsPage.bind(this);
    }

    componentDidMount() {
        this._obtainNewsPage();
    }

    componentDidUpdate(prevProps, prevState) {
        const {sortBy} = this.state;
        if (prevState.sortBy !== sortBy) {
            this._obtainNewsPage(STANDART_START_PAGE, sortBy);
        }
    }

    render() {
        const {data, sortBy, isLoading} = this.state;
        return data.length === 0 ? <IconPreloader/> : (
            <div className='page-news' style={{position: 'relative'}}>
                <Header sortBy={sortBy}
                        handleChange={this._handleChange}/>
                <div className='body'>
                    <section className='content'>
                        <FragmentsNews data={data}/>
                        <Pagination {...this.state}
                                    obtainNewsPage={this._obtainNewsPage}/>
                    </section>
                    <div className="sidebar-1 sidebar"/>
                    <div className="sidebar-2 sidebar"/>
                </div>
                {isLoading ? <IconPreloader/> : null}
            </div>
        );
    }

    async _obtainNewsPage(currentPageNumber = STANDART_START_PAGE, sortBy = SORT_BY.LEXICAL) {
        this.setState({
            isLoading: true
        });
        try {
            const news = await getNews(currentPageNumber, sortBy);
            this.setState({
                data: news
                , currentPageNumber
                , isLoading: false
            });
        } catch (e) {
            console.error(e);
        }
    }

    _handleChange(value) {
        this.setState({sortBy: value});
    };
};

export default PageNews;
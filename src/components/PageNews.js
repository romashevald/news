import React, {Component} from 'react';
import {IconLogo} from "./Icon";
import {FragmentNews} from "./FragmentNews";
import {news} from "../data/news";
import Pagination from "./Pagination";
import {Header} from "./Header";
import {SORT_BY, STANDART_START_PAGE} from "../constants";
import {getNews} from "../news-service";

class PageNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: news,
            currentPageNumber: 1,
            pageCount: null,
            pageSize: STANDART_START_PAGE,
            sortBy: SORT_BY.LEXICAL
        };
        this._handleChange = this._handleChange.bind(this);
    }

    componentDidMount() {
        this._loadPage();
    }

    componentDidUpdate(prevProps, prevState) {
        const {sortBy} = this.state;
        if (prevState.sortBy !== sortBy) {
            this._refreshPage(sortBy, 1);
        }
    }

    render() {
        const {data, sortBy} = this.state;
        return (
            <div>
                <Header handleChange={this._handleChange}
                        sortBy={sortBy}/>

                <div className='pagination-results'>
                    <FragmentNews data={data}/>
                </div>
                <div className='pagination'>
                    <div className='pagination-controls'>
                        {this._createControls()}
                    </div>
                </div>

            </div>
        );
    }

    _refreshPage(sortBy, currentPageNumber) {
        this.setState({
            data: getNews(1, sortBy)
            , currentPageNumber
        });
    };

    _loadPage() {
        const {data, pageSize, sortBy} = this.state;
        let pageCount = parseInt(data.length / pageSize);
        if (data.length % pageSize > 0) {
            pageCount++;
        }
        this.setState({
            pageCount
            , data: getNews(1, sortBy)
        });
    }

    _handleChange(e) {
        const el = e.target;
        const {name, value} = el;
        this.setState({[name]: value});
    };

    _setCurrentPage(num) {
        const {sortBy} = this.state;
        this.setState({
            currentPageNumber: num
            , data: getNews(num, sortBy)
        });
    }

    _createControls() {
        let controls = [];
        const pageCount = this.state.pageCount;
        for (let i = 1; i <= pageCount; i++) {
            const baseClassName = 'pagination-controls__button';
            const activeClassName = i === this.state.currentPageNumber ? `${baseClassName}--active` : '';
            controls.push(
                <div className={`${baseClassName} ${activeClassName}`} key={i}
                     onClick={() => this._setCurrentPage(i)}>
                    {i}
                </div>
            );
        }
        return controls;
    }

};

export default PageNews;
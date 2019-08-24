import React, {Component} from 'react';
import {IconLogo} from "./Icon";
import {FragmentNews} from "./FragmentNews";
import {news} from "../data/news";
import Pagination from "./Pagination";
import {Header} from "./Header";
import {SORT_BY, STANDART_PAGE_SIZE, STANDART_START_PAGE} from "../constants";
import {getNews} from "../news-service";
import {calcPageCount} from "../utils";

class PageNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentPageNumber: STANDART_START_PAGE,
            sortBy: SORT_BY.LEXICAL,
            isLoading: false
        };
        this._pageCount = calcPageCount();
        this._handleChange = this._handleChange.bind(this);
    }

    componentDidMount() {
        this.obtainNewsPage();
    }

    componentDidUpdate(prevProps, prevState) {
        const {sortBy} = this.state;
        if (prevState.sortBy !== sortBy) {
            this.obtainNewsPage(STANDART_START_PAGE, sortBy);
        }
    }

    render() {
        const {data, sortBy, isLoading} = this.state;
        return isLoading ? 'isLoading' : (
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

    async obtainNewsPage(currentPageNumber = STANDART_START_PAGE, sortBy = SORT_BY.LEXICAL) {
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

    _createControls() {
        let controls = [];
        const pageCount = this._pageCount;
        for (let i = 1; i <= pageCount; i++) {
            const baseClassName = 'pagination-controls__button';
            const activeClassName = i === this.state.currentPageNumber ? `${baseClassName}--active` : '';
            controls.push(
                <div className={`${baseClassName} ${activeClassName}`}
                     key={i}
                     onClick={() => this.obtainNewsPage(i, this.state.sortBy)}>
                    {i}
                </div>
            );
        }
        return controls;
    }

    _handleChange(e) {
        const el = e.target;
        const {name, value} = el;
        this.setState({[name]: value});
    };
};

export default PageNews;
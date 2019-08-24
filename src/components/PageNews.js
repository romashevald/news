import React, {Component} from 'react';
import {FragmentsNews} from "./FragmentsNews";
import {Header} from "./Header";
import {SORT_BY, STANDART_PAGE_SIZE, STANDART_START_PAGE} from "../constants";
import {getNews} from "../utils/news-service";
import {calcPageCount} from "../utils";
import {IconPreloader} from "./Icon";

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
        return (
            <body className='page-news'>
            {/*HEADER*/}

            {/*<Header handleChange={this._handleChange}*/}
            {/*sortBy={sortBy}/>*/}
            <header>
                <div className='page-header'>
                    <div className='title-news'><h3>News</h3></div>
                    <div>
                        <select onChange={this._handleChange}
                                name='sortBy'
                                value={sortBy}>
                            <option value={SORT_BY.LEXICAL}>{SORT_BY.LEXICAL}</option>
                            <option value={SORT_BY.DATE}>{SORT_BY.DATE}</option>
                        </select>
                    </div>
                </div>
            </header>

            {/*FragmentNews*/}
            <div className='body'>

                <section className='content'>
                    <FragmentsNews data={data}/>

                    <div className='pagination-controls'>
                        {this._createControls()}
                    </div>
                </section>

                <div className="sidebar-1 sidebar"/>
                <div className="sidebar-2 sidebar"/>
            </div>

            {/*PRELOADER*/}
            {/*{isLoading ? <IconPreloader/> : null}*/}
            {/*<div className="box">*/}
            {/*<div className="cat">*/}
            {/*<div className="cat__body"></div>*/}
            {/*<div className="cat__body"></div>*/}
            {/*<div className="cat__tail"></div>*/}
            {/*<div className="cat__head"></div>*/}
            {/*</div>*/}
            {/*</div>*/}
            </body>
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
            const baseClassName = 'pagination-controls-button';
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
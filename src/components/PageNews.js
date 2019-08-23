import React, {Component} from 'react';
import {IconLogo} from "./Icon";
import {FragmentNews} from "./FragmentNews";
import {list} from "../data/list";
import Pagination from "./Pagination";
import {Header} from "./Header";
import {SORT_BY} from "../constants";

class PageNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: list,
            currentPage: null,
            pageCount: null,
            pageSize: 3,
            startingPage: 1,
            sortBy: SORT_BY.ALPH
        };
        this._handleChange = this._handleChange.bind(this);
    }

    componentDidMount() {
        const startingPage = this.state.startingPage ? this.state.startingPage : 1;
        const data = this.state.data;
        const pageSize = this.state.pageSize;
        let pageCount = parseInt(data.length / pageSize);
        if (data.length % pageSize > 0) {
            pageCount++;
        }
        this.setState({
            currentPage: startingPage,
            pageCount: pageCount
        });
    }

    render() {
        const {data, currentPage, pageCount, sortBy} = this.state;
        return (
            <div>
                <Header handleChange={this._handleChange} sortBy={sortBy}/>
                <div className='pagination-results'>
                    <FragmentNews data={this._createPaginatedData()}/>
                </div>
                <div className='pagination'>
                    <div className='pagination-controls'>
                        {this._createControls()}
                    </div>
                </div>
            </div>
        );
    }

    _handleChange(e) {
        const el = e.target;
        const {name, value} = el;
        this.setState({[name]: value});

    };

    _createPaginatedData() {
        const data = this.state.data;
        const pageSize = this.state.pageSize;
        const currentPage = this.state.currentPage;
        const upperLimit = currentPage * pageSize;
        return data.slice((upperLimit - pageSize), upperLimit);
    }

    _setCurrentPage(num) {
        this.setState({currentPage: num});
    }

    _createControls() {
        let controls = [];
        const pageCount = this.state.pageCount;
        for (let i = 1; i <= pageCount; i++) {
            const baseClassName = 'pagination-controls__button';
            const activeClassName = i === this.state.currentPage ? `${baseClassName}--active` : '';
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
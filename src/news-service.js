import {news} from "./data/news";
import {SORT_BY, STANDART_PAGE_SIZE, STANDART_START_PAGE, TIMEOUT} from "./constants";

export const getNews = async (pageNumber = STANDART_START_PAGE
                              , sortType = SORT_BY.LEXICAL, limit = STANDART_PAGE_SIZE) => {
    await sleep(TIMEOUT);
    const sortedNews = sortNews(news, sortType);
    return getNewsPage(sortedNews, pageNumber, limit);
};

export const getAvailablePages = (pageSize) => {
    return Math.ceil(news.length / pageSize);
};

const sortNews = (news, sortType) => {
    switch (sortType) {
        case SORT_BY.LEXICAL:
            return news.sort((a, b) => a.title.localeCompare(b.title));
        case SORT_BY.DATE:
            return news.sort((a, b) => Number(a.date) < Number(b.date));
        default:
            return news;
    }
};

const getNewsPage = (news, pageNumber, limit) => {
    if (pageNumber < 1) {
        throw 'Cannot get page less than 1';
    }
    // if (pageNumber * limit > news.length) {
    //     throw 'Page number is too big';
    // }
    return news.slice(((pageNumber - 1) * limit), pageNumber * limit);
};

const sleep = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
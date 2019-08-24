import {news} from "../data/news";
import {STANDART_PAGE_SIZE} from "../constants";

export const calcPageCount = (pageSize = STANDART_PAGE_SIZE) => {
    const data = news;
    let pageCount = parseInt(data.length / pageSize);
    if (data.length % pageSize > 0) {
        pageCount++;
    }
    return pageCount;
};

export const timestampToData = ts => new Date(+ts).toLocaleDateString();
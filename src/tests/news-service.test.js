import {getAvailablePages, getNews} from "../utils/news-service";
import {news} from "../data/news";
import {SORT_BY, STANDARD_PAGE_SIZE} from "../constants";

it('Calculates pages count right', () => {
    expect(Math.ceil((news.length / 3))).toBe(getAvailablePages());
    expect(getAvailablePages(5)).toBe(Math.ceil((news.length / 5)));
});

it('Gets news page', async () => {
    const newsPage = await getNews();
    expect(newsPage.length).toBe(STANDARD_PAGE_SIZE);
});

it('Sorts out by date', async () => {
    const allNews = await getNews(1, SORT_BY.DATE, news.length);
    for (let i = 1; i < allNews.length; i++) {
        expect(Number(allNews[i - 1].date)).toBeLessThanOrEqual(Number(allNews[i].date));
    }
});

it('Sorts out by lexically', async () => {
    const allNews = await getNews(1, SORT_BY.LEXICAL, news.length);
    for (let i = 1; i < allNews.length; i++) {
        expect(allNews[i - 1].title.localeCompare(allNews[i].title)).toBeLessThanOrEqual(0);
    }
});

it('Fails when page number is negative', async () => {
    expect.assertions(1);
    try {
        await getNews(-1);
    } catch (e) {
        expect(e).toBe('Cannot get page less than 1');
    }
});

it('Fails when page number is too big', async () => {
    expect.assertions(1);
    try {
        await getNews(5);
    } catch (e) {
        expect(e).toBe('Page number is too big');
    }
});
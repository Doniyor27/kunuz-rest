import {
    fetch
} from "../../lib/postgres.js"
import {
    GET_NEWS_LANG,
    GET_NEWS_AUTHOR,
    GET_NEWS_CATEGORY_ID,
    GET_NEWS_ID,
    GET_NEWS_UNIQ,
    CREATW_NEWS_QUERY,
    UPDATE_NEWS_TITLEQUERY,
    UPDATE_NEWS_BODYQUERY,
    UPDATE_NEWS_AUTHORQUERY,
    DELETE_NEWSQUERY
} from "./query.js"

const readNewsLang = async (lang) => {
    try {
        const tes = await fetch(GET_NEWS_LANG, lang)
        return tes
    } catch (error) {
        console.log(error);
    }
}

readNewsLang(1)

const readNewsAuthor = async (author_id) => {
    try {
        return await fetch(GET_NEWS_AUTHOR, author_id)
    } catch (error) {
        console.log(error);
    }
}

const readNewsCateId = async (category_id) => {
    try {
        return await fetch(GET_NEWS_CATEGORY_ID, category_id)
    } catch (error) {
        console.log(error);
    }
}

const readNewsNewsId = async (news_id) => {
    try {
        return await fetch(GET_NEWS_ID, news_id)
    } catch (error) {
        console.log(error);
    }
}

const createNews = async ({
    title,
    body,
    category_id,
    author,
    lang_id
}) => {
    try {
        return await fetch(CREATW_NEWS_QUERY, title, body, category_id, author, lang_id)
    } catch (error) {
        console.log(error);
    }
}

const updateAuthorNews = async ({
    news_id,
    author
}) => {
    try {
        return await fetch(UPDATE_NEWS_AUTHORQUERY, news_id, author)
    } catch (error) {
        console.log(error);
    }
}

const updateTitleNews = async ({
    news_id,
    title
}) => {
    try {
        return await fetch(UPDATE_NEWS_TITLEQUERY, news_id, title)
    } catch (error) {
        console.log(error);
    }
}

const updateBodyNews = async ({
    news_id,
    body
}) => {
    try {
        return await fetch(UPDATE_NEWS_BODYQUERY, news_id, body)
    } catch (error) {
        console.log(error);
    }
}

const deleteNews = async ({
    news_id
}) => {
    try {
        return await fetch(DELETE_NEWSQUERY, news_id)
    } catch (error) {
        console.log(error);
    }
}

const readNewsUNIQ = async ({
    lang,
    author_id,
    category_id,
    news_id
}) => {
    try {
        const tes = await fetch(GET_NEWS_UNIQ, lang, author_id, category_id, news_id)
        return tes
    } catch (error) {
        console.log(error);
    }
}

export {
    readNewsLang,
    readNewsAuthor,
    readNewsCateId,
    readNewsNewsId,
    createNews,
    updateTitleNews,
    updateBodyNews,
    updateAuthorNews,
    deleteNews,
    readNewsUNIQ
}
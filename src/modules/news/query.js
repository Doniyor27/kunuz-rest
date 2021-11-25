const GET_NEWS_LANG = ` 
select
    n.news_title
from news as n where n.languages_id = $1;
`

const GET_NEWS_AUTHOR = ` 
select
    n.news_title
from news as n where n.author_id = $1;
`

const GET_NEWS_CATEGORY_ID = ` 
select
    n.news_title
from news as n where n.categories_id = $1;
`

const GET_NEWS_ID = `
select
    n.news_title
from news as n where n.news_id = $1;
`

const GET_NEWS_UNIQ = `
select
    n.news_title
from news as n where n.languages_id = $1 and n.author_id = $2 and  n.categories_id = $3 and n.news_id = $4;
`

// GETS

const CREATW_NEWS_QUERY = `
insert into news (news_title, news_body, author_id, categories_id, languages_id) values ($1, $2, $3, $4, $5)
`

const UPDATE_NEWS_TITLEQUERY = `
update news set news_title = $2 where news_id = $1;
`

const UPDATE_NEWS_BODYQUERY = `
update news set news_body = $2 where news_id = $1;
`

const UPDATE_NEWS_AUTHORQUERY = `
update news set author_id = $2 where news_id = $1;
`

const DELETE_NEWSQUERY = `
delete from news where news_id = $1
`

export {
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
}
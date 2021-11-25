select
*
from users as u
where u.email = 'nimadr1@gmail.com' AND u.password = '1234567ab!';


select 
    n.news_title
from news as n where n.languages_id = 1;

select 
    n.news_title
from news as n where n.author_id = 1;

select 
    n.news_title
from news as n where n.categories_id = 3;

select 
    n.news_title
from news as n where n.news_id = 2;
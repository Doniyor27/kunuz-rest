import {
    PORT,
    host
} from './config.js'
import express from 'express'
import router from './modules/auth/index.js'
import categories from './modules/categories/index.js'
import news from './modules/news/index.js'
const app = express()

app.use(express.json())
app.use(router)
app.use(categories)
app.use(news)

app.listen(PORT, () => console.log('http://' + host + ':' + PORT))
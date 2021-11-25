import {
    createNews,
    deleteNews,
    updateTitleNews,
    updateBodyNews,
    updateAuthorNews,
    readNewsUNIQ
} from "./model.js";

const getNewsController = async (req, res) => {
    try {
        if (await readNewsUNIQ(req.query)) {
            const data = await readNewsUNIQ(req.query)
            res.json({
                data: data.rows
            })
        } else {
            res.json({
                status: 404,
                message: 'Somethinks went wrong!'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const createNewsController = async (req, res) => {
    try {
        if (await createNews(req.body)) {
            res.json({
                status: 200,
                message: 'The news succesfully created!'
            })
        } else {
            res.json({
                status: 404,
                message: 'Somethinks went wrong!'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const updateNewsController = async (req, res) => {
    try {
        if (await updateTitleNews(req.body), await updateBodyNews(req.body), await updateAuthorNews(req.body)) {

            res.json({
                status: 200,
                message: 'The news succesfully updated!'
            })

        } else {
            res.json({
                status: 404,
                message: 'Somethinks went wrong!'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteNewsController = async (req, res) => {
    try {
        if (await deleteNews(req.body)) {

            res.json({
                status: 200,
                message: 'The news has been deleted!'
            })

        } else {
            res.json({
                status: 404,
                message: 'Somethinks went wrong!'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    getNewsController,
    createNewsController,
    updateNewsController,
    deleteNewsController
}
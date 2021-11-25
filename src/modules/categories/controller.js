import { createCategories, deleteCategories, updateCategories } from "./model.js";

const createController = async (req, res) => {
    try {
        if (await createCategories(req.body)) {
            
            res.json({
                status: 200,
                message: 'The category has been created!'
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

const updateController = async (req, res) => {
    try {
        if (await updateCategories(req.body)) {

            res.json({
                status: 200,
                message: 'The category has been updated!'
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

const deleteController = async (req, res) => {
    try {
        if (await deleteCategories(req.body)) {

            res.json({
                status: 200,
                message: 'The category has been deleted!'
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
    createController,
    updateController,
    deleteController
}
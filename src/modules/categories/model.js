import { fetch } from "../../lib/postgres.js"

const CREATE_CATEGORY = `
    insert into categories (categories_name, languages_id) values ($1, $2)
`

const UPDATE_CATEGORY = `
    update categories set categories_name = $1 where categories_id = $2
`

const DELETE_CATEGORY = `
    delete from categories where categories_id = $1
`

const createCategories = async ({ category_name, lang_id }) => {
    try {
        return await fetch(CREATE_CATEGORY, category_name, lang_id)
    } catch (error) {
        console.log(error);
    }
}

const updateCategories = async ({ category_name, category_id }) => {
    try {
        return await fetch(UPDATE_CATEGORY, category_name, category_id)
    } catch (error) {
        console.log(error);
    }
}

const deleteCategories = async ({ category_id }) => {
    try {
        return await fetch(DELETE_CATEGORY, category_id)
    } catch (error) {
        console.log(error);
    }
}

export {
    createCategories,
    updateCategories,
    deleteCategories
}
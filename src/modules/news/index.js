import express from "express";
import {
    getNewsController,
    createNewsController,
    updateNewsController,
    deleteNewsController
} from "./controller.js";

const router = express.Router()

router.route('/news')
    .get(getNewsController)
    .post(createNewsController)
    .put(updateNewsController)
    .delete(deleteNewsController)

export default router
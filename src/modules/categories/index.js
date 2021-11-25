import express from "express";
import { createController, updateController, deleteController } from "./controller.js";

const router = express.Router()

router.route('/categories')
    .post(createController)
    .put(updateController)
    .delete(deleteController)

export default router
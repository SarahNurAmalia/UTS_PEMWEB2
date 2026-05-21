import express from "express";

import {
    getAllCategory,
    createCategory,
    categoryById,
    updateById,
    deleteById,
} from "../controllers/categoryController.js";
const router = express.Router();

router.get("/", getAllCategory);

router.post("/", createCategory);

router.get("/:id", categoryById);

router.put("/:id", updateById);

router.delete("/:id", deleteById);

export default router;
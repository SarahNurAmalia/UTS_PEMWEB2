import express from "express";
import { getAllSpeaker, createSpeaker, speakerById, updateById, deleteById, } from "../controllers/speakerConntroller.js";
const router = express.Router();
router.get("/", getAllSpeaker);
router.post("/", createSpeaker);
router.get("/:id", speakerById);
router.put("/:id", updateById);
router.delete("/:id", deleteById);
export default router;
//# sourceMappingURL=speakerRoute.js.map
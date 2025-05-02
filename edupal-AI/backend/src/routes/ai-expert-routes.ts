import express from "express"
import reviewCodeController from "../controllers/ai-controller";
const router = express.Router()

router.post("/expert-chat", reviewCodeController);

export default router
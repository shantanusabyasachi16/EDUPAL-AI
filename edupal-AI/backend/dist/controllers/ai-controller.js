"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express"
const gemini_1 = __importDefault(require("../services/gemini"));
const reviewCodeController = async (req, res) => {
    try {
        const { messages, subjectExpert } = req.body;
        if (!messages || !subjectExpert) {
            res.status(400).json({
                message: "Both messages array and subjectExpert are required"
            });
            return;
        }
        // Get the latest user message
        const latestUserMessage = messages
            .filter(msg => msg.role === 'user')
            .pop()?.parts;
        if (!latestUserMessage) {
            res.status(400).json({ message: "No user message found in messages array" });
            return;
        }
        const response = await (0, gemini_1.default)(messages, subjectExpert);
        res.status(200).send({ message: response });
    }
    catch (error) {
        console.error("Error in reviewCodeController:", error);
        res.status(500).send({ message: "Internal server error" });
    }
};
exports.default = reviewCodeController;
// import express from "express"
// export const reviewCodeController = async (req: express.Request, res: express.Response) => {
//     res.status(200).send({ message: "Hello World" });
//   };
//# sourceMappingURL=ai-controller.js.map
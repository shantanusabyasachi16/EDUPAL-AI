"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ai_controller_1 = __importDefault(require("../controllers/ai-controller"));
const router = express_1.default.Router();
router.post("/expert-chat", ai_controller_1.default);
exports.default = router;
//# sourceMappingURL=ai-expert-routes.js.map
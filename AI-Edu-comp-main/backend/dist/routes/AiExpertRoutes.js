"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AiExpertController_1 = require("../controllers/AiExpertController");
const router = express_1.default.Router();
router.get('/chat', AiExpertController_1.reviewCodeController);
// router.get('/OopsExpert',);
// router.get('/OsExpert',);
// router.get('/DbExpert',);
// router.get('/DsExpert',);
// router.get('/AimlExpert',);
exports.default = router;

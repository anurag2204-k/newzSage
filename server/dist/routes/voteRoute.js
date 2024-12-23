"use strict";
// routes/votes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const voteController_1 = require("../controller/voteController");
const authmiddleware_1 = require("../middlewares/authmiddleware");
const router = express_1.default.Router();
router.post('/change', authmiddleware_1.authMiddleware, voteController_1.handleVote);
exports.default = router;

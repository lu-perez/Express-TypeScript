"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryServices = __importStar(require("../services/diaryServices"));
const utils_1 = require("../utils/utils");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
router.get('/diary/:id', (req, res) => {
    const diary = diaryServices.findDiaryById(Number(req.params.id));
    return (diary != null)
        ? res.send(diary)
        : res.sendStatus(404);
});
router.get('/non-sensitive-info-diary/:id', (req, res) => {
    const diary = diaryServices.findNonSensitiveInfoDiaryById(Number(req.params.id));
    return (diary != null)
        ? res.send(diary)
        : res.sendStatus(404);
});
router.post('/diary', (req, res) => {
    try {
        const newDiaryEntry = (0, utils_1.toNewDiaryEntry)(req.body);
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        res.send(addedDiaryEntry);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = router;

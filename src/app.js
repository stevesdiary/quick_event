"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const port = 2000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/hello', (req, res, next) => {
    return res.status(200).json({
        message: "Welcome to Quick events!"
    });
});
app.listen(port, () => {
    console.log(`App listening on Port ${port}`);
});

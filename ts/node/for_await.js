"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.resolve(__dirname, 'min_sec.ts');
async function readFile(path) {
    const stream = fs_1.default.createReadStream(path, { encoding: 'utf-8' });
    for await (const i of stream) {
        console.log(i);
    }
}
readFile(filePath);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// min_sec -- 把秒数转换成 时 - 分 - 秒
const readline_sync_1 = __importDefault(require("readline-sync"));
const ONE_MIN = 60;
const ONE_HOUR = ONE_MIN * 60;
const convert = (sec) => {
    const hour = Math.floor(sec / ONE_HOUR);
    const left_min = sec % ONE_HOUR;
    const min = Math.floor(left_min / ONE_MIN);
    const left_sec = left_min % ONE_MIN;
    console.log(`${hour} hour(s) - ${min} minute(s) - ${left_sec} second(s).\n`);
};
console.log('Convert seconds to hours - minutes - seconds!');
let sec = +readline_sync_1.default.question('Enter the number of seconds (<=0 to quit):\n');
while (sec > 0) {
    convert(sec);
    sec = +readline_sync_1.default.question('Enter the number of seconds (<=0 to quit):\n');
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.Config = exports.name = void 0;
const koishi_1 = require("koishi");
exports.name = 'random-number-pstr';
exports.Config = koishi_1.Schema.object({});
function apply(ctx) {
    ctx.command('random')
        .action(() => {
        return random(1, 100);
    });
}
exports.apply = apply;
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

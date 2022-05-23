"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const funcChain = (funcs, errorHandler) => (...args) => __awaiter(void 0, void 0, void 0, function* () {
    let res;
    try {
        for (let func of funcs) {
            let _res = yield func.apply(null, args);
            if (typeof _res === 'function') {
                _res = _res(res);
            }
            if (_res !== undefined) {
                res = _res;
            }
        }
    }
    catch (err) {
        if (errorHandler) {
            res = errorHandler(err);
        }
        else {
            throw err;
        }
    }
    return res;
});
exports.default = funcChain;

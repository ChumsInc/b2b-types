"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B2BError = void 0;
class B2BError extends Error {
    constructor(message, url, debug = null) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.debug = debug;
        this.url = url;
    }
}
exports.B2BError = B2BError;
exports.default = B2BError;

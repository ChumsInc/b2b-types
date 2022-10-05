"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class B2BError extends Error {
    constructor(message, url, debug = null) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.debug = debug;
        this.url = url;
    }
}
exports.default = B2BError;

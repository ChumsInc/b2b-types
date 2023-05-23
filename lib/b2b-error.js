export class B2BError extends Error {
    url;
    debug;
    constructor(message, url, debug = null) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.debug = debug;
        this.url = url;
    }
}
export default B2BError;

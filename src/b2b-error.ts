export class B2BError extends Error {
    url: string;
    debug: any;

    constructor(message: string, url: string, debug: any = null) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.debug = debug;
        this.url = url;
    }
}

export default B2BError;

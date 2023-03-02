export declare class B2BError extends Error {
    url: string;
    debug: any;
    constructor(message: string, url: string, debug?: any);
}
export default B2BError;

export type BooleanLike = boolean | 1 | 0;
export type YesNo = 'Y' | 'N';
export interface B2BError extends Error {
    debug?: string;
}
export interface Editable {
    changed?: boolean;
}

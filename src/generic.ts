//@todo: Convert all BooleanLike members to boolean, requires updating the API
export type BooleanLike = boolean | 1 | 0;
export type YesNo = 'Y'|'N';

export interface Keyword {
    id: number,
    pagetype: string,
    keyword: string,
    title: string,
    parent: string,
    redirect_to_parent: number,
    status: boolean | 1 | 0,
    lifestyle?: string,
    css?: string,
    subtitle?: string,
    size?: string,
    formatted_name?: string,
    swatch_format?: string,
    best_seller?: boolean|null,
    upcycled?: boolean|null,
}

export interface B2BError extends Error {
    debug?: string,
}

//@todo: Convert all BooleanLike members to boolean, requires updating the API
export type BooleanLike = boolean | 1 | 0;
export type YesNo = 'Y'|'N';

export interface B2BDebugError extends Error {
    debug?: string,
}

export interface Editable {
    changed?: boolean;
}

export type ActionStatus = 'idle'|'loading'|'saving'|'deleting';


export interface SortProps<T = any> {
    field: keyof T,
    ascending: boolean,
}

export interface FieldValue<T = any> {
    field: keyof T,
    value: any
}

export interface Appendable {
    newLine?: boolean;
}

export interface Selectable {
    selected?: boolean;
}

export interface EmptyObject {
}

export interface WhereUsed {
    id: number;
    keyword: string;
    active: boolean;
}

export interface Keyword {
    pagetype: 'category'|'product'|'page',
    keyword:string,
    title: string,
    parent: string|null,
    redirect_to_parent: boolean|1|0,
    id: number,
}

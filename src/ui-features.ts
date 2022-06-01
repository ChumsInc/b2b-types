export interface Slide {
    id: number,
    name: string,
    title: string,
    mainImage: string,
    startDate: string,
    endDate: string,
    cssClass: string | null,
    actionURL: string | null,
    status: boolean,
    priority: number,
    target: string,
    responsive: boolean,
    sizes: string[],
    mainOverlay: string,
}

export interface Menu {
    id: number,
    title: string,
    description: string,
    className: string,
    status: number | 1 | 0,
    items?: MenuItem[],
    parents?: number[],
}

export interface MenuItem {
    id: number,
    parentId: number,
    title: string,
    description: string,
    className: string,
    priority: number,
    url: string,
    status: boolean | 1 | 0,
    menuId?: number,
    menu?: Menu,
}

export interface Message {
    id: number,
    type: string,
    description: string,
    message: string,
    start: string | null,
    end: string | null,
    active: boolean | number,
    allow_nextday: boolean | number,
    allow_twoday: boolean | number,
}

export interface SearchResult {
    keyword: string,
    parent: string | null,
    title: string,
    sku: string,
    pagetype: string,
    image: string,
    color: string,
    additional_data?: {
        size?: string,
        subtitle?: string,
        formatted_name?: string,
        swatch_format?: string,
    },
    score: number,
}

import { BooleanLike } from "./generic.js";
export interface Slide {
    id: number;
    name: string;
    title: string;
    mainImage: string;
    startDate: string | null;
    endDate: string | null;
    cssClass: string | null;
    actionURL: string | null;
    status: boolean;
    priority: number;
    target: string;
    responsive: boolean;
    sizes: string[];
    mainOverlay: string;
}
export interface Menu {
    id: number;
    title: string;
    description: string;
    className: string;
    status: boolean | 1 | 0;
    items?: MenuItem[];
    parents?: number[];
}
export interface MenuItem {
    id: number;
    parentId: number;
    title: string;
    description: string;
    className: string;
    priority: number;
    url: string;
    status: boolean | 1 | 0;
    menuId?: number;
    menu?: Menu;
    requireLogin?: boolean;
}
export interface Message {
    id: number;
    type: string;
    description: string;
    message: string;
    start: string | null;
    end: string | null;
    active: boolean | number;
    allow_nextday: boolean | number;
    allow_twoday: boolean | number;
}
export interface SearchResult {
    keyword: string;
    parent: string | null;
    title: string;
    sku: string;
    pagetype: string;
    image: string;
    color: string;
    additional_data?: {
        size?: string;
        subtitle?: string;
        formatted_name?: string;
        swatch_format?: string;
    };
    score: number;
}
export interface ContentPage {
    id: number;
    keyword: string | null;
    title: string | null;
    metaDescription: string | null;
    content: string | null;
    filename: string | null;
    status: boolean | BooleanLike;
    changefreq: string;
    priority: number;
    lifestyle?: string | null;
    css?: string | null;
    subtitle?: string | null;
    searchWords: string | null;
}

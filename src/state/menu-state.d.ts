import type {Menu, MenuItem} from "../ui-features";

export interface MenuState {
    productMenu: Menu | null;
    items: MenuItem[];
    resourcesMenu: Menu | null;
    loading: string[];
    loaded: boolean;
    isOpen: boolean;
}

import type {AppState} from "./app-state";
import type {BannersState} from "./banners-state";
import type {CategoryState} from "./category-state";
import type {CookieConsentState} from "./cookie-consent-state";
import type {KeywordsState} from "./keywords-state";
import type {MenuState} from "./menu-state";
import type {MessagesState} from "./messages-state";
import type {PageState} from "./page-state";
import type {ProductsState} from "./products-state";
import type {VersionState} from "./version-state";

export interface PreloadedState {
    app: Partial<AppState>;
    banners: Partial<BannersState>;
    category: Partial<CategoryState>;
    cookieConsent: Partial<CookieConsentState>;
    keywords: Partial<KeywordsState>;
    menu: Partial<MenuState>;
    messages: Partial<MessagesState>;
    page: Partial<PageState>;
    products: Partial<ProductsState>;
    version: Partial<VersionState>;
}

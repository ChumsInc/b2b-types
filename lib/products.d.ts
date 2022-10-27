import { BooleanLike } from "./generic";
export declare type ProductSellAsVariants = 0;
export declare type ProductSellAsSelf = 1;
export declare type ProductSellAsMix = 3;
export declare type ProductSellAsColors = 4;
export declare type ProductSellAs = ProductSellAsVariants | ProductSellAsSelf | ProductSellAsMix | ProductSellAsColors;
export interface ProductSEO {
    changefreq: string;
    descriptionMeta: string;
    priority: number;
}
export interface ProductCategory {
    id: number;
    title: string;
    keyword: string;
    pageText: string;
    descriptionMeta: string;
    parentId: number;
    status: boolean | 1 | 0;
    changefreq: string;
    priority: number;
    timestamp?: string;
    children: ProductCategoryChild[];
    css?: string;
    lifestyle?: string | null;
}
export interface GenericProductCategoryChild {
    id: number;
    parentId: number;
    itemType: 'section' | 'category' | 'product' | 'link';
    sectionTitle: string;
    sectionDescription: string;
    title: string;
    description: string;
    urlOverride: string;
    className: string;
    imageUrl: string;
    productsId: number;
    categoriesId: number;
    priority: number;
    status: BooleanLike;
    timestamp: string;
}
export interface CategoryChildSection extends GenericProductCategoryChild {
    itemType: 'section';
    productsId: 0;
    categoriesId: 0;
}
export interface CategoryChildCategory extends GenericProductCategoryChild {
    itemType: 'category';
    productsId: 0;
    category: ProductCategory;
}
export interface CategoryChildProduct extends GenericProductCategoryChild {
    itemType: 'product';
    categoriesId: 0;
    product: BasicProduct;
}
export interface CategoryChildLink extends GenericProductCategoryChild {
    itemType: 'link';
    categoriesId: 0;
    urlOverride: string;
}
export declare type ProductCategoryChild = CategoryChildSection | CategoryChildCategory | CategoryChildProduct | CategoryChildLink;
export declare type ProductType = 'R' | 'F' | 'K' | 'D';
export interface ProductVariant {
    id: number;
    parentProductID: number;
    variantProductID: number;
    title: string;
    isDefaultVariant: boolean;
    status: boolean;
    priority: number;
    timestamp?: string;
    product?: Product;
}
export interface ProductBase {
    id: number;
    parentProductID?: number;
    variantProductID?: number;
    itemCode: string;
    status: boolean;
    msrp?: string | number | null;
    stdPrice?: string | number | null;
    priceCode?: string | null;
    stdUM?: string | null;
    salesUM?: string | null;
    salesUMFactor?: number | null;
    shipWeight?: number | string | null;
    productType?: ProductType | null;
    QuantityAvailable?: number;
    inactiveItem?: boolean;
    buffer?: number | null;
    timestamp?: string | null;
}
export interface BasicProduct extends ProductBase {
    keyword: string;
    name: string;
    metaTitle: string | null;
    description: string;
    details: string;
    image: string;
    taxClassId: number;
    manufacturersId: number;
    materialsId: number;
    sellAs: ProductSellAs;
    upc: string | null;
    defaultColor: string;
    defaultCategoriesId: number;
    defaultCategoryKeyword: string | null;
    defaultParentProductsId: number;
    options?: string | unknown[];
    requireOptions?: string | unknown[];
    canDome: boolean;
    canScreenPrint: boolean;
    availableForSale: boolean;
    dateAvailable: string;
    redirectToParent: boolean;
    parentProductKeyword: string | null;
    additionalData?: ProductAdditionalData;
    product_season_id: number | null;
    season_code: string | null;
    season_description: string | null;
    season_active: boolean | null;
    season_available: boolean;
    season_teaser: string | null;
    anticipatedPrice?: string | number | null;
    images?: ProductAlternateImage[];
}
export interface SellAsSelfProduct extends BasicProduct {
    sellAs: ProductSellAsSelf;
}
export interface SellAsVariantsProduct extends BasicProduct {
    sellAs: ProductSellAsVariants;
    variants: ProductVariant[];
}
export interface SellAsMixProduct extends BasicProduct {
    sellAs: ProductSellAsMix;
    mix: ProductMixItem;
}
export interface SellAsColorsProduct extends BasicProduct {
    sellAs: ProductSellAsColors;
    items: ProductColorItem[];
}
export declare type Product = SellAsSelfProduct | SellAsVariantsProduct | SellAsMixProduct | SellAsColorsProduct;
export interface ProductMixItem extends ProductBase {
    productId: number;
    mixName: string;
    items: ProductMixComponent[];
}
export declare type ProductMixVariant = ProductMixItem;
export interface ProductMixComponent {
    id: number;
    mixID: number;
    itemCode: string;
    itemQuantity?: number;
    colorsId: number;
    color_code?: string;
    color_name?: string;
    color?: ProductColor;
    additionalData?: ProductAdditionalData;
}
export interface ProductColor {
    id: number;
    code: string;
    name: string;
    swatchCode?: string | null;
    active?: boolean | null;
}
export interface ProductColorItemAdditionalData {
    swatch_code?: string | null;
    image_filename?: string | null;
    season_id?: number | null;
    season?: ProductSeason;
}
export interface ProductAdditionalData {
    size?: string;
    subtitle?: string;
    formatted_name?: string;
    swatch_format?: string;
    swatch_code?: string | null;
    image_filename?: string | null;
    season_id?: number | null;
    season?: ProductSeason;
    best_seller?: boolean | null;
    upcycled?: boolean | null;
}
export interface ProductColorItem extends ProductBase {
    productId: number;
    colorsId: number;
    colorCode: string;
    colorName: string;
    upc?: string | null;
    additionalData?: ProductColorItemAdditionalData;
    color: ProductColor;
}
export declare type ProductColorVariant = ProductColorItem;
export interface ProductAlternateImage {
    id: number;
    productId: number;
    image: string;
    altText: string;
    priority: number;
    status: boolean | 1 | 0;
    timestamp?: string;
}
export interface ProductSeason {
    product_season_id: number;
    code: string;
    description: string;
    product_available: boolean;
    product_teaser: string;
    active: boolean;
    properties?: {
        color?: string;
    };
    timestamp?: string;
}
export interface ProductListItem {
    id: number;
    keyword: string;
    name: string;
    itemCode: string;
    status: boolean;
    sellAs: ProductSellAs;
    image: string | null;
    manufacturersId: number;
    defaultParentProductsId: number;
    parentProductKeyword: string | null;
    variantsCount: number;
    selfCount: number;
    mixesCount: number;
    colorsCount: number;
    redirectToParent: boolean | null;
    availableForSale: boolean;
    minPrice?: string | number;
    maxPrice?: string | number;
    salePrice?: string | number;
    product_season_id: number | null;
    season_code?: string | null;
}
export interface ProductList {
    [key: string]: ProductListItem;
}
export interface ColorProductUsage {
    productId: number;
    keyword: string;
    name: string;
    itemCode: string;
    status: boolean;
    swatchCode: string | null;
    image: string | null;
}
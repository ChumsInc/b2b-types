import { CategoryChildCategory, CategoryChildLink, CategoryChildProduct, CategoryChildSection, Product, ProductCategoryChild, SellAsColorsProduct, SellAsMixProduct, SellAsSelfProduct, SellAsVariantsProduct } from "./products.js";
export declare function isCategoryChildSection(child: ProductCategoryChild): child is CategoryChildSection;
export declare function isCategoryChildCategory(child: ProductCategoryChild): child is CategoryChildCategory;
export declare function isCategoryChildProduct(child: ProductCategoryChild): child is CategoryChildProduct;
export declare function isCategoryChildLink(child: ProductCategoryChild): child is CategoryChildLink;
export declare function isSellAsSelf(product: Product | null): product is SellAsSelfProduct;
export declare function isSellAsVariants(product: Product | null): product is SellAsVariantsProduct;
export declare function isSellAsMix(product: Product | null): product is SellAsMixProduct;
export declare function isSellAsColors(product: Product | null): product is SellAsColorsProduct;

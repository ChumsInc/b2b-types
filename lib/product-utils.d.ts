import { CategoryChildCategory, CategoryChildLink, CategoryChildProduct, CategoryChildSection, Product, ProductCategoryChild, SellAsColorsProduct, SellAsMixProduct, SellAsSelfProduct, SellAsVariantsProduct } from "./products";
export declare function isCategoryChildSection(child: ProductCategoryChild): child is CategoryChildSection;
export declare function isCategoryChildCategory(child: ProductCategoryChild): child is CategoryChildCategory;
export declare function isCategoryChildProduct(child: ProductCategoryChild): child is CategoryChildProduct;
export declare function isCategoryChildLink(child: CategoryChildLink): child is CategoryChildLink;
export declare function isSellAsSelf(product: Product): product is SellAsSelfProduct;
export declare function isSellAsVariants(product: Product): product is SellAsVariantsProduct;
export declare function isSellAsMix(product: Product): product is SellAsMixProduct;
export declare function isSellAsColors(product: Product): product is SellAsColorsProduct;

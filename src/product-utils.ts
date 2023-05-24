import {
    CategoryChildCategory,
    CategoryChildLink,
    CategoryChildProduct,
    CategoryChildSection,
    Product,
    ProductCategoryChild,
    SellAsColorsProduct,
    SellAsMixProduct,
    SellAsSelfProduct,
    SellAsVariantsProduct
} from "./products.js";
import {SELL_AS_COLORS, SELL_AS_MIX, SELL_AS_SELF, SELL_AS_VARIANTS} from "./product-constants.js";

export function isCategoryChildSection(child: ProductCategoryChild): child is CategoryChildSection {
    return (child as CategoryChildSection).itemType === 'section';
}

export function isCategoryChildCategory(child: ProductCategoryChild): child is CategoryChildCategory {
    return (child as CategoryChildCategory).itemType === 'category';
}

export function isCategoryChildProduct(child: ProductCategoryChild): child is CategoryChildProduct {
    return (child as CategoryChildProduct).itemType === 'product';
}

export function isCategoryChildLink(child: CategoryChildLink): child is CategoryChildLink {
    return (child as CategoryChildLink).itemType === 'link';
}

export function isSellAsSelf(product: Product|null): product is SellAsSelfProduct {
    return !!product && (product as SellAsSelfProduct).sellAs === SELL_AS_SELF;
}

export function isSellAsVariants(product: Product|null): product is SellAsVariantsProduct {
    return !!product && (product as SellAsVariantsProduct).sellAs === SELL_AS_VARIANTS;
}

export function isSellAsMix(product: Product|null): product is SellAsMixProduct {
    return !!product && (product as SellAsMixProduct).sellAs === SELL_AS_MIX;
}

export function isSellAsColors(product: Product|null): product is SellAsColorsProduct {
    return !!product && (product as SellAsColorsProduct).sellAs === SELL_AS_COLORS;
}

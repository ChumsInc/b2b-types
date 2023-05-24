import { SELL_AS_COLORS, SELL_AS_MIX, SELL_AS_SELF, SELL_AS_VARIANTS } from "./product-constants.js";
export function isCategoryChildSection(child) {
    return child.itemType === 'section';
}
export function isCategoryChildCategory(child) {
    return child.itemType === 'category';
}
export function isCategoryChildProduct(child) {
    return child.itemType === 'product';
}
export function isCategoryChildLink(child) {
    return child.itemType === 'link';
}
export function isSellAsSelf(product) {
    return !!product && product.sellAs === SELL_AS_SELF;
}
export function isSellAsVariants(product) {
    return !!product && product.sellAs === SELL_AS_VARIANTS;
}
export function isSellAsMix(product) {
    return !!product && product.sellAs === SELL_AS_MIX;
}
export function isSellAsColors(product) {
    return !!product && product.sellAs === SELL_AS_COLORS;
}

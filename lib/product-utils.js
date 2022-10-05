"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSellAsColors = exports.isSellAsMix = exports.isSellAsVariants = exports.isSellAsSelf = exports.isCategoryChildLink = exports.isCategoryChildProduct = exports.isCategoryChildCategory = exports.isCategoryChildSection = void 0;
const product_constants_1 = require("./product-constants");
function isCategoryChildSection(child) {
    return child.itemType === 'section';
}
exports.isCategoryChildSection = isCategoryChildSection;
function isCategoryChildCategory(child) {
    return child.itemType === 'category';
}
exports.isCategoryChildCategory = isCategoryChildCategory;
function isCategoryChildProduct(child) {
    return child.itemType === 'product';
}
exports.isCategoryChildProduct = isCategoryChildProduct;
function isCategoryChildLink(child) {
    return child.itemType === 'link';
}
exports.isCategoryChildLink = isCategoryChildLink;
function isSellAsSelf(product) {
    return product.sellAs === product_constants_1.SELL_AS_SELF;
}
exports.isSellAsSelf = isSellAsSelf;
function isSellAsVariants(product) {
    return product.sellAs === product_constants_1.SELL_AS_VARIANTS;
}
exports.isSellAsVariants = isSellAsVariants;
function isSellAsMix(product) {
    return product.sellAs === product_constants_1.SELL_AS_MIX;
}
exports.isSellAsMix = isSellAsMix;
function isSellAsColors(product) {
    return product.sellAs === product_constants_1.SELL_AS_COLORS;
}
exports.isSellAsColors = isSellAsColors;
//# sourceMappingURL=product-utils.js.map
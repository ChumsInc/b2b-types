"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultVariant = exports.defaultProduct = exports.SELL_AS_COLORS = exports.SELL_AS_MIX = exports.SELL_AS_SELF = exports.SELL_AS_VARIANTS = void 0;
exports.SELL_AS_VARIANTS = 0;
exports.SELL_AS_SELF = 1;
exports.SELL_AS_MIX = 3;
exports.SELL_AS_COLORS = 4;
exports.defaultProduct = {
    buffer: null,
    canDome: false,
    canScreenPrint: false,
    dateAvailable: "",
    defaultCategoriesId: 0,
    defaultCategoryKeyword: null,
    defaultColor: "",
    inactiveItem: false,
    materialsId: 0,
    metaTitle: null,
    msrp: null,
    priceCode: null,
    productType: null,
    salesUM: null,
    salesUMFactor: null,
    season_active: null,
    season_available: false,
    season_code: null,
    season_description: null,
    season_teaser: null,
    shipWeight: null,
    stdPrice: null,
    stdUM: null,
    taxClassId: 0,
    upc: null,
    id: 0,
    name: '',
    itemCode: '',
    keyword: '',
    status: true,
    sellAs: exports.SELL_AS_SELF,
    image: '',
    manufacturersId: 12,
    defaultParentProductsId: 0,
    parentProductKeyword: null,
    redirectToParent: false,
    availableForSale: true,
    product_season_id: 0,
    description: '',
    details: '',
    QuantityAvailable: 0,
};
exports.defaultVariant = {
    id: 0,
    parentProductID: 0,
    variantProductID: 0,
    title: '',
    isDefaultVariant: false,
    status: true,
    priority: 0,
};
//# sourceMappingURL=product-constants.js.map
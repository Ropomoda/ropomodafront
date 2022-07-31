

export const calculatePriceDiscountPercent = (rrp_price, selling_price) => {
    const discountPercent = 100 - Math.floor(selling_price / rrp_price * 100);
    return discountPercent;
} 

const productCodePrefix = "rmp";
const productCodeSplit = "-";

export const getProductAbsoluteCode = (code = "") => {
    return code.split(productCodeSplit)[1];
}
export const getProductFullCode = (code = null) => {
    return `${productCodePrefix}${productCodeSplit}${code}`
}
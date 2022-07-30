import * as R from'ramda';

export const persianNumber = (number) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  if (number || number == 0) {
    return number.toString().replace(/\d/g, (n) => farsiDigits[n]);
  }
  return "";
};

export const numberWithCommas = (number, decimals = 2) => {
  if (number || number == 0) {
    let parts = number.toString().split(".");
    if (decimals && parts?.[1]?.length > decimals) {
      parts[1] = parts[1].slice(0, decimals);
    }
    let num =
      parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      (parts[1] || parts[1] === "" ? "." + parts[1] : "");

    return num;
  }
  return "";
};


export const getS3Image = (name , bucket = "public-statics") => {
  switch (bucket) {
    case "public-statics":
      return `https://rmstatics-public.ropomoda.com/${name}`;
    default:
      return `https://ropomoda.com/${name}`;
  }
}

export const isValueHollow = (value) => {
  //!DON'T CHECK FALSE VALUES
  return R.isEmpty(value) || R.isNil(value);
};
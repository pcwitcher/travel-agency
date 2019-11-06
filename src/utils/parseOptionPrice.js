export const parseOptionPrice = price => {
  if (typeof (price) == 'number') {
    return { type: 'number', value: price };
  }
  else {
    const priceParsed = price.replace(/^\$\s*/, '').replace(/,/g, '');
    const pricePercent = priceParsed.match(/(^\d+)%$/);
    if (pricePercent) {
      return { type: 'multiplier', value: parseFloat(pricePercent[1]) / 100 };
    }
    else if (!isNaN(priceParsed)) {
      return { type: 'number', value: parseFloat(priceParsed) };
    }
    else {
      return { type: 'error', value: 0 };
    }
  }
};

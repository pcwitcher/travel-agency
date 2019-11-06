import pricing from '../data/pricing.json';
import {parseOptionPrice} from './parseOptionPrice';

export const calculateTotal = (tripCost, options) => {
  let total = parseOptionPrice(tripCost).value;
  let multiplier = 0;
  for (let option of pricing) {
    const currentValue = options[option.id];
    if (typeof (currentValue) != 'undefined') {
      if (Array.isArray(currentValue) && Array.isArray(option.values)) {
        for (let optionId of currentValue) {
          const value = option.values.filter(opt => opt.id == optionId)[0];
          const price = parseOptionPrice(value.price);
          if (price.type == 'multiplier') {
            multiplier += price.value;
          }
          else if (price.type == 'number') {
            total += price.value;
          }
        }
      }
      else if (currentValue !== '' && Array.isArray(option.values)) {
        const value = option.values.filter(opt => opt.id == currentValue)[0];
        const price = parseOptionPrice(value.price);
        if (price.type == 'multiplier') {
          multiplier += price.value;
        }
        else if (price.type == 'number') {
          total += price.value;
        }
      }
      else if (option.type == 'number') {
        const price = parseOptionPrice(option.price);
        if (price.type == 'multiplier') {
          multiplier += price.value * currentValue;
        }
        else if (price.type == 'number') {
          total += price.value * currentValue;
        }
      }
    }
  }
  return total * multiplier;
};

// src/models/discount.js

const discounts = {
    "DISCOUNT20": {
      percentage: 20,
      maxDiscount: 150
    }
  };
  
  const applyDiscountCoupon = (cartValue, discountId) => {
    const discount = discounts[discountId];
    if (!discount) {
      return cartValue; // No discount applied
    }
  
    const discountAmount = (cartValue * discount.percentage) / 100;
    const finalDiscount = Math.min(discountAmount, discount.maxDiscount);
  
    return cartValue - finalDiscount;
  };
  
  module.exports = {
    applyDiscountCoupon
  };
  
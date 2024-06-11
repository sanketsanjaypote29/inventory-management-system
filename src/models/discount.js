// This file contains the discount logic for applying discount coupons to a cart. The applyDiscountCoupon function takes the cart value and a discount ID as input and returns the discounted price after applying the discount. The discount logic is defined in the discounts object, which contains the discount percentage and maximum discount amount for each discount code. The applyDiscountCoupon function calculates the discount amount based on the discount percentage and applies the discount up to the maximum discount amount. If the discount ID is not found in the discounts object, no discount is applied.

const discounts = {
    "DISCOUNT20": {
      percentage: 20,
      maxDiscount: 150
    }
  };
  
// Apply a discount coupon to the cart value
  const applyDiscountCoupon = (cartValue, discountId) => {
    const discount = discounts[discountId];
    if (!discount) {
      return cartValue; // No discount applied
    }
  
    const discountAmount = (cartValue * discount.percentage) / 100;
    const finalDiscount = Math.min(discountAmount, discount.maxDiscount);
  
    return cartValue - finalDiscount;
  };
  
//   Export the function
  module.exports = {
    applyDiscountCoupon
  };
  
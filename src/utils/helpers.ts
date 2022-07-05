import { CheckoutProduct } from "../../../eshop-backend/types/checkout"

export const getIndexInCheckout = (checkout: CheckoutProduct[], checkoutProduct: CheckoutProduct): number => {
  let index = -1;

  checkout.forEach((entry, indexInCheckout) => {
    if(entry.product.id === checkoutProduct.product.id) index = indexInCheckout;
  });

  return index;
}

export const calculateTotalAmountInCheckout = (checkout: CheckoutProduct[]): number => {
  return checkout.reduce((acc, curr) => acc += curr.product.price, 0);
}

export const pricify = (amount: number): string => {
  return amount.toFixed(2);
}
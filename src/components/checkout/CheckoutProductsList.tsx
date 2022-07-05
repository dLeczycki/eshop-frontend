import { Box } from "@chakra-ui/react"
import { useCheckout } from "../../contexts/checkout/checkout.context"
import { CheckoutProductRow } from "./CheckoutProductRow";

export const CheckoutProductsList = () => {
  const {checkout} = useCheckout();

  return (
    <Box>
      {checkout.map(checkoutProduct => <CheckoutProductRow checkoutProduct={checkoutProduct} key={checkoutProduct.product.id}/>)}
    </Box>
  )
}
import { Box } from "@chakra-ui/react"
import { useCheckout } from "../../contexts/checkout/checkout.context"
import { CheckoutProductRow } from "./CheckoutProductRow";

interface Props{
  allowDelete?: boolean;
}

export const CheckoutProductsList = (props: Props) => {
  const {allowDelete = true} = props;
  const {checkout} = useCheckout();

  return (
    <Box>
      {checkout.map(checkoutProduct => <CheckoutProductRow checkoutProduct={checkoutProduct} allowDelete={allowDelete} key={checkoutProduct.product.id}/>)}
    </Box>
  )
}
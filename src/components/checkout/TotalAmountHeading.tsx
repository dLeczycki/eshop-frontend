import { Heading } from "@chakra-ui/react"
import { useCheckout } from "../../contexts/checkout/checkout.context"
import { pricify } from "../../utils/helpers";

export const TotalAmountHeading = () => {
  const {checkoutTotalAmount} = useCheckout();
  
  return (
  <Heading 
    as="h2" 
    p={4}
    textAlign="center"
    size="lg" 
    border="2px solid"
    borderColor="blue.600"
    borderRadius="10px"
    color="blue.600"
  >
    Razem: {pricify(checkoutTotalAmount)}zł
  </Heading>)
}
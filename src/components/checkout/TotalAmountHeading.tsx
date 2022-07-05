import { Heading } from "@chakra-ui/react"
import { useCheckout } from "../../contexts/checkout/checkout.context"

export const TotalAmountHeading = () => {
  const {totalAmount} = useCheckout();
  
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
    Razem: {totalAmount}zł
  </Heading>)
}
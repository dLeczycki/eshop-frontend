import { Button } from "@chakra-ui/react"
import { useCheckout } from "../../contexts/checkout/checkout.context";

export const CleanCheckoutButton = () => {
  const {cleanCheckout} = useCheckout();

  return (
    <Button onClick={cleanCheckout} colorScheme='red' flexBasis="45%">Wyczyść koszyk</Button>
  )
}
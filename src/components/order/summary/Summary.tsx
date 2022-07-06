import { Box, Heading } from "@chakra-ui/react"
import { CheckoutProductsList } from "../../checkout/CheckoutProductsList"
import { TotalAmountHeading } from "../../checkout/TotalAmountHeading"

export const Summary = () => {

  return (
    <Box>
      <Heading as="h2" color="blue.400" size="lg">Podsumowanie</Heading>
      <CheckoutProductsList />
      <TotalAmountHeading />
    </Box>
  )
}
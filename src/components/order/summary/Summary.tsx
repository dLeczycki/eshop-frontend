import { Box, Flex, Heading, Stack } from "@chakra-ui/react"
import { GoToOrderButton } from "../../../components/checkout/GoToOrderButton"
import { CheckoutProductsList } from "../../checkout/CheckoutProductsList"
import { Bill } from "../bill/Bill"
import { PaymentSummary } from "./PaymentSummary"
import { RecipientSummary } from "./RecipientSummary"
import { ShipmentSummary } from "./ShipmentSummary"
import { StartPaymentButton } from "./StartPaymentButton"

export const Summary = () => {

  return (
    <Box>
      <Heading 
        as="h1" 
        size="2xl" 
        my={4} 
        color="blue.600" 
        textAlign="center"
      >
        Podsumowanie zamówienia
      </Heading>
      <Flex 
        flexWrap="wrap"
        justify="center"
        gap={8}
      >
        <Stack 
          flexBasis={["100%", "100%", "45%", "45%", "30%"]}
          padding={4}
        >
          <RecipientSummary />
        </Stack>
        <Stack 
          direction="column" 
          flexBasis={["100%", "100%", "45%", "45%", "30%"]}
          padding={4}
          gap={10}
        >
          <ShipmentSummary />
          <PaymentSummary />
        </Stack>
        <Flex 
          flexBasis={["100%", "100%", "80%", "80%", "30%"]}
          direction="column"
          justifyContent="space-between"
          padding={4}
        >
          <Box as="div">
            <Heading as="h2" color="blue.400" size="lg">Koszyk</Heading>
            <CheckoutProductsList allowDelete={false}/>
          </Box>
          <Box as="div">
            <Bill/>
            <Flex direction="column" justify="space-between" mt={2} gap={2}>
              <GoToOrderButton colorScheme="gray"/>
              <StartPaymentButton />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
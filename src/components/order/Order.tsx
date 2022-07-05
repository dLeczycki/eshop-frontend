import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { Bill } from "./bill/Bill";
import { PaymentForm } from "./payment/PaymentForm";
import { RecipientForm } from "./recipient/RecipientForm";
import { ShipmentForm } from "./shipment/ShipmentForm";

export const Order = () => {

  return (
    <Box>
      <Heading 
        as="h1" 
        size="2xl" 
        my={4} 
        color="blue.600" 
        textAlign="center"
      >
        Zamówienie
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
          <RecipientForm />
        </Stack>
        <Stack 
          direction="column" 
          flexBasis={["100%", "100%", "45%", "45%", "30%"]}
          padding={4}
        >
          <ShipmentForm />
          <PaymentForm />
        </Stack>
        <Flex 
          flexBasis={["100%", "100%", "80%", "80%", "30%"]}
          direction="column"
          justifyContent="flex-end"
          padding={4}
        >
          <Bill />
        </Flex>
      </Flex>
    </Box>
  )
}
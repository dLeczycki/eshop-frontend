import { Box, Heading } from "@chakra-ui/react";
import { DeliveryTypesRadioGroup } from "./DeliveryTypesRadioGroup";

export const ShipmentForm = () => {

  return (
    <Box>
      <Heading as="h2" color="blue.400" size="lg">Dostawa</Heading>
      <DeliveryTypesRadioGroup />
    </Box>
  )
}
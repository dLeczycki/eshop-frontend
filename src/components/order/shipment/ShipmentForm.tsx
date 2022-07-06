import { Box, Heading } from "@chakra-ui/react";
import { ShipmentRadioGroup } from "./ShipmentRadioGroup";

export const ShipmentForm = () => {

  return (
    <Box>
      <Heading as="h2" color="blue.400" size="lg">Dostawa</Heading>
      <ShipmentRadioGroup />
    </Box>
  )
}
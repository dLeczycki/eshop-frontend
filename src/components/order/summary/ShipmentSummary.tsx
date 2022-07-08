import { Box, Heading } from "@chakra-ui/react";
import { useOrder } from "../../../contexts/order/order.context"
import { ShipmentRadioGroup } from "../shipment/ShipmentRadioGroup";

export const ShipmentSummary = () => {
  const {shipment} = useOrder();

  return (
    <Box>
      <Heading as="h2" color="blue.400" size="lg">Wybrana dostawa</Heading>
      <ShipmentRadioGroup shipments={[shipment]}/>
    </Box>
  )
}
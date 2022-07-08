import { Box, Heading } from "@chakra-ui/react"
import { useOrder } from "../../../contexts/order/order.context";
import { PaymentRadioGroup } from "../payment/PaymentRadioGroup"

export const PaymentSummary = () => {
  const {payment} = useOrder();

  return (
    <Box>
      <Heading as="h2" color="blue.400" size="lg">Wybrana Płatność</Heading>
      <PaymentRadioGroup payments={[payment]} />
    </Box>
  )
}
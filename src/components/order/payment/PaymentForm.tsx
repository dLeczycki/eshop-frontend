import { Flex, Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { Payment } from "types";
import { useOrder } from "../../../contexts/order/order.context";
import { payments } from "../../../utils/dummy";

export const PaymentForm = () => {
  const {payment, setPayment} = useOrder();

  const handlePaymentChange = (value: string) => {
    const payment = payments.find(payment => payment.name === value) as Payment;
    setPayment(payment);
  }

  return (
    <Flex direction="column">
      <Heading as="h2" color="blue.400" size="lg">Płatność</Heading>
      <RadioGroup value={payment.name} onChange={handlePaymentChange}>
        <Stack mt={4}>
          {payments.map(payment => (<Radio key={payment.name} value={payment.name}>{payment.fullName}</Radio>))}
        </Stack>
      </RadioGroup>
    </Flex>
  )
}
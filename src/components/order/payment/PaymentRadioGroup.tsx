import { Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { Payment } from "types";
import { useOrder } from "../../../contexts/order/order.context";

interface Props{
  payments: Payment[];
}

export const PaymentRadioGroup = (props: Props) => {
  const {payments} = props;
  const {payment, setPayment} = useOrder();

  const handlePaymentChange = (value: string) => {
    const payment = payments.find(payment => payment.name === value) as Payment;
    setPayment(payment);
  }

  return (
    <RadioGroup value={payment.name} onChange={handlePaymentChange}>
        <Stack mt={4}>
          {payments.map(payment => (<Radio key={payment.name} value={payment.name}>{payment.fullName}</Radio>))}
        </Stack>
      </RadioGroup>
  )
}
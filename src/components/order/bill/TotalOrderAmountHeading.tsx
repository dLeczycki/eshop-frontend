import { Heading } from "@chakra-ui/react"
import { useOrder } from "../../../contexts/order/order.context"
import { pricify } from "../../../utils/helpers"

interface Props{
  size?: "md" | "lg";
  color?: "black" | "blue.600";
}

export const TotalOrderAmountHeading = (props: Props) => {
  const {size = "md", color = "black"} = props;
  const {orderTotalAmount} = useOrder();

  return (
    <Heading as="h3" size={size} color={color} textAlign="right">Razem: {pricify(orderTotalAmount)}zł</Heading>
  )
}
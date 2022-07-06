import { Flex, Heading } from "@chakra-ui/react";
import { payments } from "../../../utils/dummy";
import { PaymentRadioGroup } from "./PaymentRadioGroup";

export const PaymentForm = () => {

  return (
    <Flex direction="column">
      <Heading as="h2" color="blue.400" size="lg">Płatność</Heading>
      <PaymentRadioGroup payments={payments} />
    </Flex>
  )
}
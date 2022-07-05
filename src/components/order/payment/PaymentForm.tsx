import { Flex, Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react"

export const PaymentForm = () => {
  return (
    <Flex direction="column">
      <Heading as="h2" color="blue.400" size="lg">Płatność</Heading>
      <RadioGroup defaultValue="payme">
        <Stack mt={4}>
          <Radio value="payme">Payme</Radio>
          <Radio value="transakcje25">Transakcje25</Radio>  
        </Stack>
      </RadioGroup>
    </Flex>
  )
}
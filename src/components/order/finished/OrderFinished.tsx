import { Flex, Heading } from "@chakra-ui/react"
import { GoToProductsButton } from "../../../components/home/GoToProductsButton"

export const OrderFinished = () => {

  return (
    <Flex mt={10} direction="column" gap={10} align="center">
      <Heading as="h1" fontSize={64} color="blue.600">Dziękuję za zakupy w moim eSklepie!</Heading>
      <Heading as="h2" color="blue.400">Może skusisz się na coś jeszcze? ;)</Heading>
      <GoToProductsButton />
    </Flex>
  )
}
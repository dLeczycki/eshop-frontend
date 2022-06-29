import { Flex } from "@chakra-ui/react"
import { Checkout } from "../checkout/Checkout"
import { Logo } from "./Logo"

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      w="100%"
      h="72px"
      px="1em"
      borderBottom="2px solid"
      borderColor="blue.400"
    >
      <Logo />
      <Checkout />
    </Flex>
  )
}
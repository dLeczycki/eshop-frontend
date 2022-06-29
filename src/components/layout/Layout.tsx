import { Flex } from "@chakra-ui/react"
import { CheckoutProvider } from "../../contexts/checkout/checkout.context"
import { Footer } from "./Footer"
import { Main } from "./Main"
import { Navbar } from "./Navbar"

export const Layout = () => {

  return (
    <Flex
      align="center"
      justify="space-between"
      direction="column"
      h="100vh"
      maxH="100vh"
    >
      <CheckoutProvider>
        <Navbar />
        <Main />
      </CheckoutProvider>
      <Footer />
    </Flex>
  )
}
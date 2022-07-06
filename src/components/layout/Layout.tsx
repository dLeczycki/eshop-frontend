import { Flex } from "@chakra-ui/react"
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
      <Navbar />
      <Main />
      <Footer />
    </Flex>
  )
}
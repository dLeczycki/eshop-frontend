import { Box, Heading } from "@chakra-ui/react"
import { GoToProductsButton } from "./GoToProductsButton"

export const GoToProductsInfo = () => {
  
  return (
    <Box
      textAlign={["center", "center", "center", "right"]}
      mb={6}
      mr={10}
      minWidth={["100%", "100%", "100%", "480px"]}
      maxWidth={"480px"}
    >
      <Heading as="h1" size="3xl" mb={6} color="blue.600">Mój eSklep!</Heading>
      <Heading as="h2" size="lg"mb={10} color="gray.900">Zobacz, co mogę Ci zaoferować!</Heading>
      <GoToProductsButton />
    </Box>
  )
}
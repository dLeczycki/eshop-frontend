import { Flex, Spinner as ChakraSpinner } from "@chakra-ui/react"

export const Spinner = () => {
  return (
    <Flex
      height="100%"
      width="100%"
      justify="center"
      align="center"
    >
      <ChakraSpinner
        color="blue.400"
        size="xl"
      />
    </Flex>
  )
}
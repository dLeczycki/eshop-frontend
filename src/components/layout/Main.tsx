import { Box } from "@chakra-ui/react"
import { Router } from "../router/Router"

export const Main = () => {
  return (
    <Box
      as="main"
      flexGrow="1"
      width="100%"
    >
      <Router />
    </Box>
  )
}
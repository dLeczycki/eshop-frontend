import { Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

export const Logo = () => {
  return (
    <Link
        as={RouterLink}
        to="/"
        fontSize="3xl"
        color="blue.600"
        fontStyle="italic"
        fontWeight="bold"
      >
        eSklep
    </Link>
  )
}
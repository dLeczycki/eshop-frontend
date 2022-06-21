import { Box, Link } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Box
      as="footer"
      pb=".2em"
    >
      &copy; <Link href="mailto:danielleczycki@gmail.com" color="blue.400">Daniel Łęczycki</Link>
    </Box>
  )
}
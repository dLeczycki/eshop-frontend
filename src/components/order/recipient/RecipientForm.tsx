import { Box, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"

export const RecipientForm = () => {
  return (
    <Box>
      <Heading as="h2" color="blue.400" size="lg">Dane odbiorcy</Heading>
      <Stack spacing={3} mt={4} w="100%">
        <FormControl isRequired>
          <FormLabel htmlFor="firstname">Imię:</FormLabel>
          <Input id="firstname" size="md" w="100%"/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="surname">Nazwisko:</FormLabel>
          <Input id="surname" size="md" w="100%"/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input id="email" type="email" size="md" w="100%"/>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='phone'>Numer telefonu:</FormLabel>
          <Input id='phone' size="md" w="100%"/>
        </FormControl>
        <Stack direction="row" spacing={4}>
          <FormControl isRequired w="40%" minW="140px">
            <FormLabel htmlFor="postalCode">Kod pocztowy:</FormLabel>
            <Input id="postalCode" size="md" w="100%"/>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="city">Miasto:</FormLabel>
            <Input id="city" size="md" w="100%"/>
          </FormControl>
        </Stack>
        <FormControl isRequired>
          <FormLabel htmlFor="address">Adres:</FormLabel>
          <Input id="address" size="md" w="100%"/>
        </FormControl>
      </Stack>
    </Box>
  )
}
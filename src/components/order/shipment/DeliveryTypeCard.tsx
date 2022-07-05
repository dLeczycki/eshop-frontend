import { Box, Flex, Text, useRadio } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeliveryType } from "types";

interface Props{
  deliveryType: DeliveryType;
}

export const DeliveryTypeCard = (props: Props) => {
  const {deliveryType, ...radioProps} = props;
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        justify="space-between"
        align="center"
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        color="gray.500"
        transition=".2s"
        _checked={{
          bg: 'blue.600',
          color: 'white',
          borderColor: 'blue.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        <Box textAlign="center" fontSize="40px">
          <FontAwesomeIcon icon={deliveryType.icon} />
        </Box>
        <Text fontSize="20px">{deliveryType.fullName}</Text>
        <Text>{deliveryType.price.toFixed(2)}zł</Text>
      </Flex>
    </Box>
  )
}
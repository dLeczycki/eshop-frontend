import { Box, Flex, Text, useRadio } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pricify } from "../../../utils/helpers";
import { Shipment } from "types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props{
  shipment: Shipment;
}

export const ShipmentCard = (props: Props) => {
  const {shipment, ...radioProps} = props;
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
          <FontAwesomeIcon icon={shipment.icon as IconProp} />
        </Box>
        <Text fontSize="20px">{shipment.fullName}</Text>
        <Text>{pricify(shipment.price)}zł</Text>
      </Flex>
    </Box>
  )
}
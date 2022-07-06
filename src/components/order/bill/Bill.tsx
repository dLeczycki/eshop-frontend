import { Box, Divider, Flex, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { faShoppingBasket, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { GoToSummary } from "./GoToSummaryButton"
import { pricify } from "../../../utils/helpers"
import { useOrder } from "../../../contexts/order/order.context"
import { useCheckout } from "../../../contexts/checkout/checkout.context"

const CheckoutIcon = () => <FontAwesomeIcon icon={faShoppingBasket} />
const ShipmentIcon = () => <FontAwesomeIcon icon={faTruck} />

export const Bill = () => {
  const {orderTotalAmount, shipment} = useOrder();
  const {checkoutTotalAmount} = useCheckout();

  return (
    <>
      <Box
        border="2px solid"
        borderColor="blue.400"
        borderTopRadius="10px"
        padding={4}
      >
        <List spacing={3} fontSize={18}>
          <ListItem display="flex" justifyContent="space-between">
            <Flex
              justify="center"
              align="center"
            >
              <ListIcon as={CheckoutIcon} color="blue.600"/>
              <Text ml={2}>Koszyk:</Text>
            </Flex>
            <Text>{pricify(checkoutTotalAmount)}zł</Text>
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Flex
              justify="center"
              align="center"
            >
              <ListIcon as={ShipmentIcon} color="blue.600"/>
              <Text ml={2}>Dostawa:</Text>
            </Flex>
            <Text>{pricify(shipment.price)}zł</Text>
          </ListItem>
        </List>
        <Divider my={2}/>
        <Heading as="h3" size="md" textAlign="right">Razem: {pricify(orderTotalAmount)}zł</Heading>
      </Box>
      <GoToSummary />
    </>
  )
}
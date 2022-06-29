import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading } from "@chakra-ui/react";
import { CheckoutProductRow } from "./CheckoutProductRow";
import { useCheckout } from "../../contexts/checkout/checkout.context";

interface Props{
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutDrawer = (props: Props) => {
  const {isOpen, onClose} = props;
  const {checkout, cleanCheckout} = useCheckout();

  const totalAmount = checkout.reduce((acc, curr) => acc += curr.product.price, 0).toFixed(2);

  return (
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Koszyk</DrawerHeader>

          <DrawerBody display="flex" flexDirection="column" justifyContent="space-between">
            <Box>
              {checkout.map(checkoutProduct => <CheckoutProductRow checkoutProduct={checkoutProduct} key={checkoutProduct.product.id}/>)}
            </Box>
            <Heading as="h2" fontSize={24} color="blue.600">Koszt całkowity: {totalAmount}zł</Heading>
          </DrawerBody>

          <DrawerFooter display="flex" flexDirection="column">
            <Button onClick={cleanCheckout} mb={1} colorScheme='red' w="100%">Wyczyść koszyk</Button>
            <Button colorScheme='blue' w="100%">Przejdź do dostawy</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}
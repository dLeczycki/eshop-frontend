import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../../contexts/checkout/checkout.context";
import { CheckoutProductsList } from "./CheckoutProductsList";
import { TotalAmountHeading } from "./TotalAmountHeading";

interface Props{
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutDrawer = (props: Props) => {
  const {isOpen, onClose} = props;
  const navigate = useNavigate();
  const {cleanCheckout} = useCheckout();

  const handleGoToOrder = () => {
    onClose();
    navigate('/zamowienie');
  }

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
          <DrawerHeader color="blue.400" fontSize={24}>Koszyk</DrawerHeader>

          <DrawerBody display="flex" flexDirection="column" justifyContent="space-between">
            <CheckoutProductsList />
            <TotalAmountHeading />
          </DrawerBody>

          <DrawerFooter display="flex" gap={2}>
            <Button onClick={cleanCheckout} colorScheme='red' w="100%">Wyczyść koszyk</Button>
            <Button onClick={handleGoToOrder} fontWeight="bold" colorScheme='blue' w="100%">Przejdź do zamówienia</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}
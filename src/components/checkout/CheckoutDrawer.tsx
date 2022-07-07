import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { useCheckout } from "../../contexts/checkout/checkout.context";
import { CheckoutProductsList } from "./CheckoutProductsList";
import { CleanCheckoutButton } from "./CleanCheckoutButton";
import { GoToOrderButton } from "./GoToOrderButton";
import { TotalCheckoutAmountHeading } from "./TotalCheckoutAmountHeading";

interface Props{
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutDrawer = (props: Props) => {
  const {checkout} = useCheckout();
  const {isOpen, onClose} = props;

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
            <TotalCheckoutAmountHeading />
          </DrawerBody>

          <DrawerFooter display="flex" gap={2} justifyContent="space-between">
          {checkout.length > 0 && <CleanCheckoutButton />}
          {checkout.length > 0 && <GoToOrderButton onClick={onClose}/>}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}
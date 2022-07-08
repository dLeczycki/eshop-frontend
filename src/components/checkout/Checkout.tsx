import { useDisclosure } from "@chakra-ui/react"
import { CheckoutDrawer } from "./CheckoutDrawer";
import { OpenCheckoutButton } from "./OpenCheckoutButton";

export const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <OpenCheckoutButton handleClick={onOpen}/>
      <CheckoutDrawer isOpen={isOpen} onClose={onClose}/>
    </>
  )
}
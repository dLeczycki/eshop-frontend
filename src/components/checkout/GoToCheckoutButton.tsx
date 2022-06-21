import { Button } from "@chakra-ui/react"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const GoToCheckoutButton = () => {
  return (
    <Button
      leftIcon={<FontAwesomeIcon icon={faShoppingBasket} />}
      colorScheme="blue"
    >
      Koszyk
    </Button>
  )
}
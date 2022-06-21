import { Button } from "@chakra-ui/react"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

export const GoToCheckoutButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/koszyk");
  }

  return (
    <Button
      leftIcon={<FontAwesomeIcon icon={faShoppingBasket} />}
      colorScheme="blue"
      onClick={handleClick}
    >
      Koszyk
    </Button>
  )
}
import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

export const GoToProductsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/produkty');
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      colorScheme="blue"
      variant="outline"
    >
      Więcej produktów
    </Button>
  )
}
import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const GoToSummaryButton = () => {
  const navigate = useNavigate();

  const handleGoToSummary = () => {
    navigate('/zamowienie/podsumowanie');
  }

  return (
    <Button 
      w="100%" 
      colorScheme="blue" 
      borderTopRadius={0} 
      onClick={handleGoToSummary}
    >
      Przejdź do podsumowania
    </Button>
  )
}
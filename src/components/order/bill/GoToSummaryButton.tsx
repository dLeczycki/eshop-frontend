import { Button, useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useOrder } from "../../../contexts/order/order.context";

export const GoToSummaryButton = () => {
  const {validateRecipient} = useOrder();
  const navigate = useNavigate();
  const toast = useToast();

  const handleGoToSummary = () => {
    if (!validateRecipient()){
      toast({
        title: 'Błąd',
        status: 'error',
        isClosable: true,
        description: "Podane dane klienta są niepoprawne",
        position: "bottom-right",
      })
    } else{
      console.log('here');
      navigate('/zamowienie/podsumowanie');
    }
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
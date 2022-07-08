import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

interface Props{
  onClick?: () => void;
  colorScheme?: "blue" | "gray";
}

export const GoToOrderButton = (props: Props) => {
  const {onClick, colorScheme = "blue"} = props;
  const navigate = useNavigate();
  
  const handleGoToOrder = () => {
    onClick && onClick();
    navigate('/zamowienie');
  }

  return (
    <Button 
      onClick={handleGoToOrder} 
      fontWeight="bold" 
      colorScheme={colorScheme}
    >
      Przejdź do zamówienia
    </Button>
  )
}
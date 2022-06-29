import { Box, Button, Text} from "@chakra-ui/react"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCheckout } from "../..//contexts/checkout/checkout.context";

interface Props{
  handleClick: () => void;
}

export const OpenCheckoutButton = (props: Props) => {
  const {handleClick} = props;
  const {checkout} = useCheckout();

  return (
      <Button
        leftIcon={<FontAwesomeIcon icon={faShoppingBasket} />}
        colorScheme="blue"
        onClick={handleClick}
      >
        <Text>Koszyk</Text>
        {checkout.length > 0 && <Box 
          ml = {1} 
          w="22px" 
          h="22px" 
          lineHeight="22px" 
          backgroundColor="white" 
          borderRadius="50%" 
          color="blue.400" 
          fontWeight="bold">
            {checkout.length}
          </Box>}
      </Button>
  )
}
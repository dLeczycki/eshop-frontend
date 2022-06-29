import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { config } from "../../config/config";
import { CheckoutProduct } from "types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useCheckout } from "../../contexts/checkout/checkout.context";

interface Props{
  checkoutProduct: CheckoutProduct;
}
export const CheckoutProductRow = (props: Props) => {
  const {checkoutProduct} = props;
  const {removeFromCheckout} = useCheckout();

  const handleRemoveFromCheckout = () => {
    removeFromCheckout(checkoutProduct);
  }

  return (
    <Flex mb={2} justify="space-between" align="center">
      <Image w="120px" h="120px" objectFit="contain" src={`${config.api}/${checkoutProduct.product.images && checkoutProduct.product.images[0].url}`}/>
      <Flex px={2} flexGrow={1} justify="space-between">
        <Heading as="h3" fontSize="1em">{checkoutProduct.product.name}</Heading>
        <Text>{checkoutProduct.product.price}zł</Text>
        <Text>{checkoutProduct.count} szt.</Text>
      </Flex>
      <Button colorScheme="red" onClick={handleRemoveFromCheckout}><FontAwesomeIcon icon={faTimes} /></Button>
    </Flex>
  )
}
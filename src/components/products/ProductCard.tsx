import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { config } from "../../config/config";
import { CheckoutProduct, Product } from "types";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../../contexts/checkout/checkout.context";
import { SyntheticEvent } from "react";

interface Props{
  product: Product;
}

export const ProductCard = (props: Props) => {
  const {product} = props;
  const navigate = useNavigate();
  const checkout = useCheckout();

  const handleRedirectToProduct = () => {
    navigate(`/produkty/${product.id}`);
  }

  const handleAddToCheckout = (e: SyntheticEvent) => {
    e.stopPropagation();

    const checkoutProduct: CheckoutProduct = {product, count: 1};
    checkout.addToCheckout(checkoutProduct);
  }

  return (
    <Flex
      mx={4}
      my={4}
      direction="column"
      justify="space-between"
      boxShadow="2px 2px 5px 0 rgba(0,0,0,0.2)"
      borderRadius="10px"
      cursor="pointer"
      onClick={handleRedirectToProduct}
    >
      <Image 
        src={product.images && `${config.api}/${product.images[0].url}`} 
        alignSelf="center"
        w="240px"
        h="200px"
        objectFit="contain"
      />
      <Flex
        px={4}
        justify="space-between"
        align="center"
      >
        <Heading 
          as="h3" 
          size="sm"
          py={2} 
          textAlign="center" 
          color="blue.600"
          maxWidth="50%"
        >
          {product.name}
        </Heading>
        <Text
          textAlign="center"
          py={2}
          maxW="100px"
          color="gray.800"
          fontWeight="bold"
        >
          {product.price}zł
        </Text>
      </Flex>
      <Button
        colorScheme="blue"
        borderTopRadius="unset"
        onClick = {(e) => handleAddToCheckout(e)}
      >
        Dodaj do koszyka
      </Button>
    </Flex>
  )
}
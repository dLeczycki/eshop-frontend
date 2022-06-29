import { Button, Flex, Heading, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { config } from "../../config/config";
import { CheckoutProduct, Product } from "types";
import { useCheckout } from "../../contexts/checkout/checkout.context";
import { SyntheticEvent } from "react";

interface Props{
  product: Product;
}

export const ProductCard = (props: Props) => {
  const {product} = props;
  const checkout = useCheckout();

  const handleAddToCheckout = (e: SyntheticEvent) => {
    const checkoutProduct: CheckoutProduct = {product, count: 1};
    checkout.addToCheckout(checkoutProduct);
  }

  return (
    <LinkBox 
      as="div"
      mx={4}
      my={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      boxShadow="2px 2px 5px 0 rgba(0,0,0,0.2)"
      borderRadius="10px"
      cursor="pointer"
    >
      <LinkOverlay 
        href={`/produkty/${product.id}`} 
        flexGrow={1} 
        transitionDuration=".2s"
        _hover={{
          outline: "none", 
          boxShadow: "0px 0px 5px 5px rgba(49, 130, 206, 0.2)",
          borderTopRadius: "10px",
        }}
        _focus={{
            outline: "none", 
            boxShadow: "0px 0px 5px 5px rgba(49, 130, 206, 0.2)",
            borderTopRadius: "10px",
          }}
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
      </LinkOverlay>
      <Button
        colorScheme="blue"
        borderTopRadius="unset"
        w="100%"
        onClick = {(e) => handleAddToCheckout(e)}
      >
        Dodaj do koszyka
      </Button>
    </LinkBox>
  )
}
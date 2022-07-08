import { Image, Box, Text, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"
import {Product} from 'types';
import {config} from '../../config/config';

interface Props{
  product: Product;
}

export const ProductSlide = (props: Props) => {
  const {product} = props;

    return (
      <Box
        position="relative"
      >
        <Image src={product.images && `${config.api}/${product.images[0].url}`} key={product.id} maxHeight="400px" objectFit={"contain"}/>
        <Heading
          as={RouterLink}
          to={`produkty/${product.id}`}
          position="absolute"
          top="20px"
          right={["unset", "unset", "unset", "20px"]}
          left={["20px", "20px", "20px", "unset"]}
          py={2}
          px={4}
          color="white"
          fontWeight="bold"
          fontSize={["3xl", "3xl", "3xl", "3xl", "6xl"]}
          textShadow="0 0 6px #2B6CB0"
          borderBottom="4px solid"
          borderColor="blue.600"
        >
          {product.name}
        </Heading>
        <Text
          position="absolute"
          right="20px"
          bottom="20px"
          py={2}
          px={4}
          color="blue.600"
          backgroundColor="white"
          fontWeight="bold"
          fontSize={["xl", "xl", "xl", "xl", "3xl"]}
          border="2px solid"
          borderColor="blue.600"
          borderRadius="16px"
        >{product.price}zł</Text>
      </Box>
    )
}
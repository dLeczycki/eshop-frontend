import { Flex } from "@chakra-ui/react";
import { Product } from "types";
import { ProductCard } from "./ProductCard";

interface Props{
  products: Product[];
}

export const ProductsList = (props: Props) => {
  const {products} = props;
  
  return (
  <Flex
    p={4}
    flexWrap="wrap"
    justify="space-around"
  >
    {products.map(product => <ProductCard product={product} key={product.id}/>)}
  </Flex>)
}
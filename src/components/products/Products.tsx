import { Box, Heading } from "@chakra-ui/react"
import { useFetch } from "../../hooks/useFetch"
import { Spinner } from "../layout/Spinner";
import { Product } from "types";
import { ProductsList } from "./ProductsList";


export const Products = () => {
  const {data: products, loading, error} = useFetch<Product[]>('products?embed=images');

  if(loading) return <Spinner />

  if(error) return <Heading as="h3">{error.message}</Heading>

  return (
    <Box>
      <Heading 
        as="h1" 
        size="2xl" 
        my={4} 
        color="blue.600" 
        textAlign="center"
      >
        Produkty
      </Heading>
      {products && <ProductsList products={products}/>}
    </Box>
  )
}
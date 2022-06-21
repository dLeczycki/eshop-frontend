import { Spinner } from "@chakra-ui/react";
import { Product } from "types";
import { useFetch } from "../../hooks/useFetch";
import { Carousel } from "./Carousel"
import { GoToProductsButton } from "./GoToProductsButton"

export const Home = () => {
  const {data: products, loading, error} = useFetch<Product[]>('products');

  if(loading) return <Spinner />

  if(error) return <h3>Coś poszło nie tak... Spróbuj ponownie za kilka minut</h3>

  return (
    <>
      <Carousel />
      <GoToProductsButton />
    </>
  )
}
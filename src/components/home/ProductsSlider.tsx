import { Button, Heading } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel";

import { Product } from 'types';
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "../layout/Spinner";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProductSlide } from "./ProductSlide";

export const ProductsSlider = () => {
  const {data: products = [], loading: productsLoading, error: productsError} = useFetch<Product[]>('products?limit=4&embed=images');

  if(productsLoading) return <Spinner />

  if(productsError) return <Heading>Coś poszło nie tak... Spróbuj ponownie za kilka minut</Heading>

  const indicator = (
    onClickHandler: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void, 
    isSelected: boolean, 
    index: number, 
    label: string
  ): React.ReactNode | undefined => {
    return (
      <Button
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        tabIndex={0}
        mx=".4em"
        size={"xs"}
        borderRadius="50%"
        colorScheme={isSelected ? "blue" : "gray"}
      ></Button>
    )
  }

  return (
    <Carousel 
      infiniteLoop 
      autoPlay 
      interval={4000} 
      showArrows={false}
      renderIndicator={indicator}
      showThumbs={false}
      showStatus={false}
    >
      {products.map((product) => <ProductSlide product={product} key={product.id}/>)}
    </Carousel>
  )
}
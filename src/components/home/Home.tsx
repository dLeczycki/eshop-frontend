import { ProductsSlider } from "./ProductsSlider"
import { Flex } from "@chakra-ui/react"
import { GoToProductsInfo } from "./GoToProductsInfo"

export const Home = () => {
  return (
    <Flex
      p={20}
      align="center"
      justifyContent="space-between"
      direction={["column", "column", "column", "row"]}
      height="100%"
    >
      <GoToProductsInfo />
      <ProductsSlider />
    </Flex>
  )
}
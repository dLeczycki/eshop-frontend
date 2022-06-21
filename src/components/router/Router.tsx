import { Route, Routes } from "react-router-dom"
import { Checkout } from "../checkout/Checkout"
import { Products } from "../products/Products"
import { Home } from "../home/Home"
import { NotFound } from "../not-found/NotFound"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produkty" element={<Products />} />
      <Route path="/koszyk" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
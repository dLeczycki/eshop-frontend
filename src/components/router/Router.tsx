import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Checkout } from "../checkout/Checkout"
import { Products } from "../products/Products"
import { Home } from "../ui/Home"
import { NotFound } from "../ui/NotFound"

export const Router = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produkty" element={<Products />} />
      <Route path="/koszyk" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  )
}
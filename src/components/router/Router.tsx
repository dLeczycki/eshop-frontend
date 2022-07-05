import { Route, Routes } from "react-router-dom"
import { Products } from "../products/Products"
import { Home } from "../home/Home"
import { NotFound } from "../not-found/NotFound"
import { Order } from "../order/Order"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produkty" element={<Products />} />
      <Route path="/zamowienie" element={<Order />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
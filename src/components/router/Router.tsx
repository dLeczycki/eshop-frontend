import { Route, Routes } from "react-router-dom"
import { Products } from "../products/Products"
import { Home } from "../home/Home"
import { NotFound } from "../not-found/NotFound"
import { Order } from "../order/Order"
import { Summary } from "../order/summary/Summary"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produkty" element={<Products />} />
      <Route path="/zamowienie/podsumowanie" element={<Summary />} />
      <Route path="/zamowienie" element={<Order />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
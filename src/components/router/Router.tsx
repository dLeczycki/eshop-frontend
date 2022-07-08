import { Route, Routes } from "react-router-dom"
import { Products } from "../products/Products"
import { Home } from "../home/Home"
import { NotFound } from "../not-found/NotFound"
import { Order } from "../order/Order"
import { Summary } from "../order/summary/Summary"
import { PaymentTemporaryPage } from "../order/payment/PaymentTemporaryPage"
import { OrderFinished } from "../order/finished/OrderFinished"
import { ProductDetails } from "../products/ProductDetails"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produkty" element={<Products />} />
      <Route path="/produkty/:id" element={<ProductDetails />} />
      <Route path="/zamowienie/podsumowanie" element={<Summary />} />
      <Route path="/zamowienie/platnosc" element={<PaymentTemporaryPage />} />
      <Route path="/zamowienie/zakonczone" element={<OrderFinished />} />
      <Route path="/zamowienie" element={<Order />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
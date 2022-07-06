import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { OrderProvider } from "./contexts/order/order.context"
import { CheckoutProvider } from "./contexts/checkout/checkout.context"

function App() {
  return (
    <BrowserRouter>
      <CheckoutProvider>
        <OrderProvider>
          <Layout />
        </OrderProvider>
      </CheckoutProvider>
    </BrowserRouter>
  );
}

export default App;

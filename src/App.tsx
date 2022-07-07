import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { OrderProvider } from "./contexts/order/order.context";
import { CheckoutProvider } from "./contexts/checkout/checkout.context";
import { ShipmentProvider } from './contexts/shipment/shipment.context';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBoltLightning, faBox, fas, faTruck } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faTruck, faBox, faBoltLightning)

function App() {
  return (
    <BrowserRouter>
      <CheckoutProvider>
        <ShipmentProvider>
          <OrderProvider>
            <Layout />
          </OrderProvider>
        </ShipmentProvider>
      </CheckoutProvider>
    </BrowserRouter>
  );
}

export default App;

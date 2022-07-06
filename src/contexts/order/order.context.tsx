import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Payment, Shipment } from "types";
import { useCheckout } from "../checkout/checkout.context";

import { payments, shipments } from "../../utils/dummy";

interface ProviderProps{
  children: ReactNode;
}

interface ContextValues{
  recipient: Object;
  shipment: Shipment;
  setShipment: (shipment: Shipment) => void;
  payment: Payment;
  setPayment: (payment: Payment) => void;
  orderTotalAmount: number;
}

const initialContextValues = {
  recipient: {},
  shipment: shipments[0],
  setShipment: (shipment: Shipment) => {},
  payment: payments[0],
  setPayment: (payment: Payment) => {},
  orderTotalAmount: 0,
}

const OrderContext = React.createContext<ContextValues>(initialContextValues);

function OrderProvider(props: ProviderProps) {
  const {children} = props;
  const [recipient, setRecipient] = useState<Object>({});
  const [shipment, setShipment] = useState<Shipment>(initialContextValues.shipment);
  const [payment, setPayment] = useState<Payment>(initialContextValues.payment);
  const [orderTotalAmount, setOrderTotalAmount] = useState<number>(0);
  const {checkoutTotalAmount} = useCheckout();

  useEffect(() => {
    setOrderTotalAmount(shipment.price + checkoutTotalAmount)
  }, [shipment, checkoutTotalAmount]);

  return (
    <OrderContext.Provider value={{recipient, shipment, setShipment, payment, setPayment, orderTotalAmount}}>
      {children}
    </OrderContext.Provider>
  )
}

const useOrder = () => useContext(OrderContext);

export {OrderProvider, useOrder}
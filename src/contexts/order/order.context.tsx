import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Payment, Recipient, RecipientError, Shipment } from "types";
import { useCheckout } from "../checkout/checkout.context";

import { payments, shipments } from "../../utils/dummy";

interface ProviderProps{
  children: ReactNode;
}

interface ContextValues{
  recipient: Recipient;
  recipientError: RecipientError;
  setRecipient: React.Dispatch<React.SetStateAction<Recipient>>;
  shipment: Shipment;
  setShipment: React.Dispatch<React.SetStateAction<Shipment>>;
  payment: Payment;
  setPayment: React.Dispatch<React.SetStateAction<Payment>>;
  orderTotalAmount: number;
}

const initialContextValues = {
  recipient: {firstname: '', lastname: '', email: '', phone: '', postalCode: '', city: '', address: ''},
  recipientError: {firstname: '', lastname: '', email: '', phone: '', postalCode: '', city: '', address: ''},
  setRecipient: () => {},
  shipment: shipments[0],
  setShipment: () => {},
  payment: payments[0],
  setPayment: () => {},
  orderTotalAmount: 0,
}

const OrderContext = React.createContext<ContextValues>(initialContextValues);

function OrderProvider(props: ProviderProps) {
  const {children} = props;
  const [recipient, setRecipient] = useState<Recipient>(initialContextValues.recipient);
  const [recipientError, setRecipientErrors] = useState<RecipientError>(initialContextValues.recipientError);
  const [shipment, setShipment] = useState<Shipment>(initialContextValues.shipment);
  const [payment, setPayment] = useState<Payment>(initialContextValues.payment);
  const [orderTotalAmount, setOrderTotalAmount] = useState<number>(initialContextValues.orderTotalAmount);
  const {checkoutTotalAmount} = useCheckout();

  useEffect(() => {
    setOrderTotalAmount(shipment.price + checkoutTotalAmount)
  }, [shipment, checkoutTotalAmount]);

  return (
    <OrderContext.Provider value={{recipient, recipientError, setRecipient, shipment, setShipment, payment, setPayment, orderTotalAmount}}>
      {children}
    </OrderContext.Provider>
  )
}

const useOrder = () => useContext(OrderContext);

export {OrderProvider, useOrder}
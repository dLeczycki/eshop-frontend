import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Payment, Recipient, RecipientError, Shipment } from "types";
import { useCheckout } from "../checkout/checkout.context";

import { payments } from "../../utils/dummy";
import { useShipment } from "../shipment/shipment.context";

interface ProviderProps{
  children: ReactNode;
}

interface ContextValues{
  recipient: Recipient;
  recipientError: RecipientError;
  validateRecipient: () => boolean;
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
  validateRecipient: () => false,
  setRecipient: () => {},
  shipment: {name: '', fullName: '', icon: '', price: 0},
  setShipment: () => {},
  payment: payments[0],
  setPayment: () => {},
  orderTotalAmount: 0,
}

const OrderContext = React.createContext<ContextValues>(initialContextValues);

function OrderProvider(props: ProviderProps) {
  const {children} = props;
  const {checkoutTotalAmount} = useCheckout();
  const {shipments} = useShipment();
  const [recipient, setRecipient] = useState<Recipient>(initialContextValues.recipient);
  const [recipientError, setRecipientErrors] = useState<RecipientError>(initialContextValues.recipientError);
  const [shipment, setShipment] = useState<Shipment>(shipments[0]);
  const [payment, setPayment] = useState<Payment>(initialContextValues.payment);
  const [orderTotalAmount, setOrderTotalAmount] = useState<number>(initialContextValues.orderTotalAmount);

  useEffect(() => {
    setShipment(shipments[0]);
  }, [shipments]);

  useEffect(() => {
    shipment && setOrderTotalAmount(shipment.price + checkoutTotalAmount)
  }, [shipment, checkoutTotalAmount]);

  const validateRecipient = (): boolean => {
    //TODO: Make better recipient validation
    let isRecipientValid = true;
    const recipientError: RecipientError = {firstname: '', lastname: '', email: '', phone: '', postalCode: '', city: '', address: ''}
    if(!recipient.firstname) {
      recipientError.firstname = 'Pole nie może być puste';
      isRecipientValid = false;
    }
    if(!recipient.lastname) {
      recipientError.lastname = 'Pole nie może być puste';
      isRecipientValid = false;
    }
    if(!recipient.email) {
      recipientError.email = 'Pole nie może być puste';
      isRecipientValid = false;
    }
    if(!recipient.postalCode) {
      recipientError.postalCode = 'Pole nie może być puste';
      isRecipientValid = false;
    }
    if(!recipient.city) {
      recipientError.city = 'Pole nie może być puste';
      isRecipientValid = false;
    }
    if(!recipient.address) {
      recipientError.address = 'Pole nie może być puste';
      isRecipientValid = false;
    }

    setRecipientErrors(recipientError);
    return isRecipientValid;
  }

  return (
    <OrderContext.Provider value={{recipient, recipientError, validateRecipient, setRecipient, shipment, setShipment, payment, setPayment, orderTotalAmount}}>
      {children}
    </OrderContext.Provider>
  )
}

const useOrder = () => useContext(OrderContext);

export {OrderProvider, useOrder}
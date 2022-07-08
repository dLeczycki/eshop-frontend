import { Button, useToast } from "@chakra-ui/react"
import { useState } from "react";
import { config } from "../../../config/config";
import { OrderToPlace } from "types";
import { useCheckout } from "../../../contexts/checkout/checkout.context";
import { useOrder } from "../../../contexts/order/order.context";

import { mapCheckoutToOrderProductsArray } from "../../../utils/helpers";

export const StartPaymentButton = () => {
  const {recipient, shipment, payment} = useOrder();
  const {checkout, cleanCheckout} = useCheckout();
  const orderProducts = mapCheckoutToOrderProductsArray(checkout);

  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleStartPayment = async () => {
    setIsLoading(true);

    const order: OrderToPlace = {
      ...recipient,
      paymentName: payment.name,
      shipmentName: shipment.name,
      orderProducts,
    }
    
    const response = await fetch(`${config.api}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    setIsLoading(false);

    if(!response.ok) return toast({
      title: 'Błąd',
      status: 'error',
      isClosable: true,
      description: data.message,
      position: "bottom-right",
    });

    cleanCheckout();
    window.location.href = data.redirectUrl;
  }

  return (
    <Button 
      colorScheme="green"
      isLoading={isLoading}
      onClick={handleStartPayment}
    >
      Zakończ i zapłać
    </Button>
  )
}
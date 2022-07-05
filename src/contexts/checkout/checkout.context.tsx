import React, { ReactNode, useContext, useEffect, useReducer, useState } from "react"
import { CheckoutProduct } from "types";
import { checkoutReducer } from "./checkout.reducer";
import { CheckoutActionType } from "./checkout.actions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { calculateTotalAmountInCheckout, pricify } from "../../utils/helpers";

interface ProviderProps{
  children: ReactNode;
}

interface ContextValues{
  checkout: CheckoutProduct[];
  totalAmount: string;
  addToCheckout: (checkoutProduct: CheckoutProduct) => void;
  removeFromCheckout: (checkoutProduct: CheckoutProduct) => void;
  cleanCheckout: () => void; 
}

const initialContextValues = {
  checkout: [],
  totalAmount: '0.00',
  addToCheckout: () => {},
  removeFromCheckout: () => {},
  cleanCheckout: () => {},
}

const CheckoutContext = React.createContext<ContextValues>(initialContextValues);

function CheckoutProvider(props: ProviderProps) {
  const {children} = props;
  const [checkoutInLS, setCheckoutInLS] = useLocalStorage<CheckoutProduct[]>('checkout');
  const [checkout, dispatch] = useReducer(checkoutReducer, checkoutInLS);
  const [totalAmount, setTotalAmount] = useState<string>('0.00');

  useEffect(() => {
    setCheckoutInLS(checkout);
    setTotalAmount(pricify(calculateTotalAmountInCheckout(checkout)));
  }, [checkout]);

  const addToCheckout = (checkoutProduct: CheckoutProduct): void => {
    dispatch({type: CheckoutActionType.ADD, payload: {...checkoutProduct}});
  }

  const removeFromCheckout = (checkoutProduct: CheckoutProduct): void => {
    dispatch({type: CheckoutActionType.REMOVE, payload: {...checkoutProduct}});
  }

  const cleanCheckout = (): void => {
    dispatch({type: CheckoutActionType.CLEAN});
  }

  return (
    <CheckoutContext.Provider value={{checkout, totalAmount, addToCheckout, removeFromCheckout, cleanCheckout}}>
      {children}
    </CheckoutContext.Provider>
  )
}

const useCheckout = () => useContext(CheckoutContext);

export {CheckoutProvider, useCheckout}
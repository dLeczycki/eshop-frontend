import React, { ReactNode, useContext, useEffect, useReducer, useState } from "react"
import { CheckoutProduct } from "types";
import { checkoutReducer } from "./checkout.reducer";
import { CheckoutActionType } from "./checkout.actions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { calculateTotalAmountInCheckout } from "../../utils/helpers";

interface ProviderProps{
  children: ReactNode;
}

interface ContextValues{
  checkout: CheckoutProduct[];
  checkoutTotalAmount: number;
  addToCheckout: (checkoutProduct: CheckoutProduct) => void;
  removeFromCheckout: (checkoutProduct: CheckoutProduct) => void;
  cleanCheckout: () => void; 
}

const initialContextValues = {
  checkout: [],
  checkoutTotalAmount: 0,
  addToCheckout: () => {},
  removeFromCheckout: () => {},
  cleanCheckout: () => {},
}

const CheckoutContext = React.createContext<ContextValues>(initialContextValues);

function CheckoutProvider(props: ProviderProps) {
  const {children} = props;
  const [checkoutInLS, setCheckoutInLS] = useLocalStorage<CheckoutProduct[]>('checkout', []);
  const [checkout, dispatch] = useReducer(checkoutReducer, checkoutInLS);
  const [checkoutTotalAmount, setCheckoutTotalAmount] = useState<number>(0);

  useEffect(() => {
    setCheckoutInLS(checkout);
    setCheckoutTotalAmount(calculateTotalAmountInCheckout(checkout));
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
    <CheckoutContext.Provider value={{checkout, checkoutTotalAmount, addToCheckout, removeFromCheckout, cleanCheckout}}>
      {children}
    </CheckoutContext.Provider>
  )
}

const useCheckout = () => useContext(CheckoutContext);

export {CheckoutProvider, useCheckout}
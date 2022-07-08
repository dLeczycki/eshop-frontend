import { getIndexInCheckout } from "../../utils/helpers";
import { CheckoutProduct } from "types";
import { CheckoutActionType } from "./checkout.actions";

interface AddToCheckout{
  type: CheckoutActionType.ADD;
  payload: CheckoutProduct;
}

interface RemoveFromCheckout{
  type: CheckoutActionType.REMOVE;
  payload: CheckoutProduct;
}

interface CleanCheckout{
  type: CheckoutActionType.CLEAN;
}

type CheckoutAction = AddToCheckout | RemoveFromCheckout | CleanCheckout;

export function checkoutReducer(state: CheckoutProduct[], action: CheckoutAction){
  let index: number, newState: CheckoutProduct[];

  switch (action.type){
    case CheckoutActionType.ADD:
      index = getIndexInCheckout(state, action.payload);
      if(index < 0) return [...state, action.payload];
      
      newState = [...state];
      newState[index].count += action.payload.count;
      return [...newState];
    case CheckoutActionType.REMOVE:
      index = getIndexInCheckout(state, action.payload);
      if(index < 0) return [...state];
      if(state[index].count <= 1 || state[index].count === action.payload.count) return state.filter(current => current.product.id !== action.payload.product.id);

      newState = [...state];
      newState[index].count -= action.payload.count;
      return [...newState];
    case CheckoutActionType.CLEAN:
      return [];
  }
}
import React, { ReactNode, useContext } from "react"
import { useFetch } from "../../hooks/useFetch";
import { Shipment } from "types";

interface ProviderProps{
  children: ReactNode;
}

interface ContextValues{
  shipments: Shipment[];
  loading: boolean;
  error: Error | undefined;
}

const initialContextValues = {
  shipments: [],
  loading: false,
  error: undefined,
}

const ShipmentContext = React.createContext<ContextValues>(initialContextValues);

function ShipmentProvider(props: ProviderProps){
  const {children} = props;
  const {data: shipments = [], loading, error} = useFetch<Shipment[]>('shipments');

  return (<ShipmentContext.Provider value={{shipments, loading, error}}>{children}</ShipmentContext.Provider>)
}

const useShipment = () => useContext(ShipmentContext);

export {ShipmentProvider, useShipment}
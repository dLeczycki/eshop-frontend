import { RadioGroup, Stack, useRadioGroup } from "@chakra-ui/react";
import { Shipment } from "types";
import { ShipmentCard } from "./ShipmentCard";

import { useOrder } from "../../../contexts/order/order.context";

interface Props{
  shipments: Shipment[];
}

export const ShipmentRadioGroup = (props: Props) => {
  const {shipments} = props;
  const {setShipment} = useOrder();

  const handleShipmentChange = (nextValue: string) => {
    const shipment = shipments.find(shipment => shipment.name === nextValue) as Shipment;
    setShipment(shipment);
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'shipment',
    defaultValue: shipments[0].name,
    onChange: handleShipmentChange,
  })

  const group = getRootProps();
  
  return (
      <RadioGroup my={4}>
        <Stack direction="column" {...group}>
        {shipments.map(shipment => {
            const radio = getRadioProps({value: shipment.name});
            return (
              <ShipmentCard key={shipment.name} shipment={shipment} {...radio} />
            )
          })}
        </Stack>
      </RadioGroup>
  )
}
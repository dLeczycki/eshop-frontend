import { RadioGroup, Stack, useRadioGroup } from "@chakra-ui/react";
import { ShipmentCard } from "./ShipmentCard";

import { shipments } from "../../../utils/dummy";

export const DeliveryTypesRadioGroup = () => {

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'delivery',
    defaultValue: 'courier',
    onChange: console.log,
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
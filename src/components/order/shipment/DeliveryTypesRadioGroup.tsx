import { DeliveryType } from "types";
import { faBoltLightning, faBox, faTruck } from "@fortawesome/free-solid-svg-icons"
import { DeliveryTypeCard } from "./DeliveryTypeCard";
import { RadioGroup, Stack, useRadioGroup } from "@chakra-ui/react";

export const DeliveryTypesRadioGroup = () => {
  const deliveryTypes: DeliveryType[] = [
    {
      name: 'courier',
      fullName: 'SuperKurier',
      icon: faTruck,
      price: 20.00,
    }, 
    {
      name: 'post',
      fullName: 'Szybka Poczta',
      icon: faBox,
      price: 8.00,
    }, 
    {
      name: 'teleport',
      fullName: 'Teleport',
      icon: faBoltLightning,
      price: 0.00,
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'delivery',
    defaultValue: 'courier',
    onChange: console.log,
  })

  const group = getRootProps();
  
  return (
      <RadioGroup my={4}>
        <Stack direction="column" {...group}>
        {deliveryTypes.map(deliveryType => {
            const radio = getRadioProps({value: deliveryType.name});
            return (
              <DeliveryTypeCard key={deliveryType.name} deliveryType={deliveryType} {...radio} />
            )
          })}
        </Stack>
      </RadioGroup>
  )
}
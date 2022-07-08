import { Box, Heading } from "@chakra-ui/react";
import { ShipmentRadioGroup } from "./ShipmentRadioGroup";
import { useFetch } from "../../../hooks/useFetch";
import { Shipment } from "types";
import { Spinner } from "../../../components/layout/Spinner";

export const ShipmentForm = () => {
  const {data: shipments, loading, error} = useFetch<Shipment[]>('shipments');

  if(loading) return <Spinner />

  if(error) return <Heading>Coś poszło nie tak... Spróbuj ponownie za kilka minut</Heading>

  return (
    <Box>
      <Heading as="h2" color="blue.400" size="lg">Dostawa</Heading>
      {shipments && <ShipmentRadioGroup shipments={shipments}/>}
    </Box>
  )
}
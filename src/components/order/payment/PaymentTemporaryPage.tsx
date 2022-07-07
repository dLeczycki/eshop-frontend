import { Flex, Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../layout/Spinner"

export const PaymentTemporaryPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/zamowienie/zakonczone");
    }, 4000);
  }, []);

  return (
    <Flex mt={10} direction="column" gap={10} align="center">
      <Heading as="h1" color="blue.600">Tutaj realizowana byłaby płatność</Heading>
      <Heading as="h2" color="blue.400">(Poczekaj na przekierowanie)</Heading>
      <Spinner />
    </Flex>
  )
}
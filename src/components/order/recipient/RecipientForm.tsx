import { ChangeEvent } from "react";
import { Box, Heading, Stack } from "@chakra-ui/react"
import { useOrder } from "../../../contexts/order/order.context";
import { FormRow } from "./FormRow";

interface Props{
  isReadOnly?: boolean;
}

export const RecipientForm = (props: Props) => {
  const {isReadOnly} = props;
  const {recipient, recipientError, setRecipient} = useOrder();

  const handleRecipientChange = (property: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setRecipient((prev) => ({...prev, [property]: e.target.value}));
    }
  }

  return (
    <Box>
      <Heading as="h2" color="blue.400" size="lg">Dane odbiorcy</Heading>
      <Stack spacing={3} mt={4} w="100%">
        <FormRow 
          label="Imię" 
          id="firstname" 
          value={recipient.firstname} 
          setValue={handleRecipientChange('firstname')} 
          error={recipientError.firstname} 
          isReadOnly={isReadOnly}
          formControlAdditionalProps={{isRequired: true}}
        />
        <FormRow 
          label="Nazwisko" 
          id="lastname" 
          value={recipient.lastname} 
          setValue={handleRecipientChange('lastname')} 
          error={recipientError.lastname} 
          isReadOnly={isReadOnly}
          formControlAdditionalProps={{isRequired: true}}
        />
        <FormRow 
          label="Email" 
          id="email" 
          value={recipient.email} 
          setValue={handleRecipientChange('email')} 
          error={recipientError.email} 
          isReadOnly={isReadOnly}
          formControlAdditionalProps={{isRequired: true}}
        />
        <FormRow 
          label="Numer telefonu" 
          id="phone" 
          value={recipient.phone as string} 
          setValue={handleRecipientChange('phone')} 
          error={recipientError.phone} 
          isReadOnly={isReadOnly}
        />
        <Stack direction="row" spacing={4}>
          <FormRow 
            label="Kod pocztowy" 
            id="postalCode" 
            value={recipient.postalCode} 
            setValue={handleRecipientChange('postalCode')} 
            error={recipientError.postalCode} 
            isReadOnly={isReadOnly}
            formControlAdditionalProps={{isRequired: true, w:"40%", minW:"140px"}}
          />
          <FormRow 
            label="Miasto" 
            id="city" 
            value={recipient.city} 
            setValue={handleRecipientChange('city')} 
            error={recipientError.city} 
            isReadOnly={isReadOnly}
            formControlAdditionalProps={{isRequired: true}}
          />
        </Stack>
        <FormRow 
          label="Adres" 
          id="address" 
          value={recipient.address} 
          setValue={handleRecipientChange('address')} 
          error={recipientError.address} 
          isReadOnly={isReadOnly}
          formControlAdditionalProps={{isRequired: true}}
        />
      </Stack>
    </Box>
  )
}
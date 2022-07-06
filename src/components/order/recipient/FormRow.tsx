import { ChangeEvent } from "react";
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"

interface Props{
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  error: string;
  formControlAdditionalProps?: Object;
}

export const FormRow = (props: Props) => {
  const {value, setValue, label, id, error, formControlAdditionalProps} = props;

  const isError = error !== "";

  return (
    <FormControl isInvalid={isError} {...formControlAdditionalProps}>
      <FormLabel htmlFor={id}>{label}:</FormLabel>
      <Input 
        size="md" 
        w="100%" 
        id={id} 
        value={value}
        onChange={setValue}
      />
      {isError && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}
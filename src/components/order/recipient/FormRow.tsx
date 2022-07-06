import { ChangeEvent } from "react";
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"

interface Props{
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  error: string;
  isReadOnly?: boolean;
  formControlAdditionalProps?: Object;
}

export const FormRow = (props: Props) => {
  const {value, setValue, label, id, error, isReadOnly = false, formControlAdditionalProps} = props;

  const isError = error !== "";

  return (
    <FormControl isInvalid={isError} isReadOnly={isReadOnly} {...formControlAdditionalProps}>
      <FormLabel htmlFor={id}>{label}:</FormLabel>
      <Input 
        size="md" 
        w="100%" 
        id={id} 
        value={value}
        onChange={setValue}
        variant={isReadOnly ? "filled" : "outline"}
      />
      {isError && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}
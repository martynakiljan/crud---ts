/** @format */
import FormControl from "@mui/joy/FormControl";
import { Error, FormLabel } from "../utilis/styledcomponents";
import { OutlinedInput } from "@mui/material";

type DefaultProps = {
  type: string;
  text: string;
  id: string;
  name: string;
  value: string;
  formErrors: [];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  type,
  text,
  id,
  name,
  value,
  formErrors,
  onChange,
}: DefaultProps) => {
  return (
    <FormControl sx={{ width: "55ch" }}>
      <FormLabel>
        {text}
        <OutlinedInput
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </FormLabel>
      {formErrors && <Error>{formErrors}</Error>}
    </FormControl>
  );
};
export default FormInput;

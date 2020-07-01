import { useState } from "react";

export const useForm = InitialValue => {
  const [values, setValues] = useState(InitialValue);
  return [
      values,
      e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
      }
  ];
}
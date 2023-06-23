import { useState } from "react";

const useInput = (validation) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsutTouched] = useState(false);

  const inputIsValid = validation(value);
  const hasError = !inputIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsutTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsutTouched(false);
  };

  return {
    value,
    hasError,
    inputIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

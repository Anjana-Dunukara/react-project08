import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputFieldTouched, setInputFieldTouched] = useState(false);

  const inputIsValid = enteredName.trim() !== "";
  const inputDataInvalid = !inputIsValid && inputFieldTouched;

  let formIsValid = false;

  if (inputIsValid) {
    formIsValid = true;
  }

  const setinputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputFieldTouched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setInputFieldTouched(true);

    if (!inputIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setInputFieldTouched(false);
  };

  const inputStyles = inputDataInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={setinputChangeHandler}
          type="text"
          id="name"
          onBlur={inputBlurHandler}
          value={enteredName}
        />
        {inputDataInvalid && (
          <p className="error-text">Input must not be empty!!!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

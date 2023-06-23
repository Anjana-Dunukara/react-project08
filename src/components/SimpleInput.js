import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputIsValid, setInputISValid] = useState(false);
  const [inputFieldTouched, setInputFieldTouched] = useState(false);
  const inputRef = useRef();

  const setinputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputFieldTouched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setInputFieldTouched(true);

    if (enteredName.trim() === "") {
      setInputISValid(false);
      return;
    }

    setInputISValid(true);
    console.log(inputRef.current.value);
    console.log(enteredName);
    setEnteredName("");
  };

  const inputDataInvalid = !inputIsValid && inputFieldTouched;

  const inputStyles = inputDataInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

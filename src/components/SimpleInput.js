import useInput from "../hooks/use-inputs";

const SimpleInput = (props) => {
  const validateName = (name) => {
    return name.trim() !== "";
  };

  const {
    value,
    hasError,
    inputIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput(validateName);

  let formIsValid = false;

  if (inputIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!inputIsValid) {
      return;
    }

    console.log(value);
    reset();
  };

  const inputStyles = hasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={valueChangeHandler}
          type="text"
          id="name"
          onBlur={inputBlurHandler}
          value={value}
        />
        {hasError && <p className="error-text">Input must not be empty!!!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

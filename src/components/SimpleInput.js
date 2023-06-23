import useInput from "../hooks/use-inputs";

const SimpleInput = (props) => {
  const validateName = (name) => {
    return name.trim() !== "";
  };

  const validateEmail = (email) => {
    return email.includes("@");
  };

  const {
    value,
    hasError,
    inputIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput(validateName);

  const {
    value: emailValue,
    hasError: emailHasError,
    inputIsValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(validateEmail);

  let formIsValid = false;

  if (inputIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!inputIsValid) {
      return;
    }

    console.log(value);
    console.log(emailValue);
    reset();
    emailReset();
  };

  const inputStyles = hasError ? "form-control invalid" : "form-control";
  const emailStyles = emailHasError ? "form-control invalid" : "form-control";

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
      <div className={emailStyles}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailChangeHandler}
          type="text"
          id="name"
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className="error-text">Input must be a Valid Email!!!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const inputRef = useRef();

  const setinputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    console.log(enteredName);
    setEnteredName("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
          onChange={setinputChangeHandler}
          type="text"
          id="name"
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

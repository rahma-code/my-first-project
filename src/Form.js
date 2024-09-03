import { useState } from "react";
import "./Form.css";
import Modal from "./Modal";
export default function Form() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showmodel, setshowmodel] = useState(false);
  const [FormInputs, SetFormInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    salary: "",
    AnEmployee: false,
  });
  function handelcheckboxchange(event) {
    SetFormInputs({ ...FormInputs, AnEmployee: event.target.checked });
  }

  function handleformsubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = FormInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Fromat Is Incorrect");
    }
    setshowmodel(true);
  }

  function handledivclick() {
    console.log("div clicked");
    if (showmodel) {
      setshowmodel(false);
    }
  }

  const btnIsDisabled =
    FormInputs.name === "" ||
    FormInputs.age === "" ||
    FormInputs.phoneNumber === "";
  return (
    <div className="form-one" onClick={handledivclick}>
      <form id="form-two" className="form-one">
        <h1>Requesting a Loan</h1>
        <hr />

        <label>Name:</label>
        <input
          value={FormInputs.name}
          onChange={(event) => {
            SetFormInputs({ ...FormInputs, name: event.target.value });
          }}
        ></input>
        <label>phone Number:</label>
        <input
          value={FormInputs.phoneNumber}
          onChange={(event) => {
            SetFormInputs({ ...FormInputs, phoneNumber: event.target.value });
          }}
        ></input>
        <label>Age</label>
        <input
          value={FormInputs.age}
          onChange={(event) => {
            SetFormInputs({ ...FormInputs, age: event.target.value });
          }}
        ></input>

        <label style={{ marginTop: "10px" }}>are you an employee?</label>
        <input
          type="checkbox"
          checked={FormInputs.AnEmployee}
          onChange={handelcheckboxchange}
        />

        <label>salary</label>
        <select
          value={FormInputs.salary}
          onChange={(event) => {
            SetFormInputs({ ...FormInputs, salary: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          className={btnIsDisabled ? "disabled" : ""}
          disabled={btnIsDisabled}
          onClick={handleformsubmit}
          id="submit-btn"
          type="submit"
        >
          submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} isvisible={showmodel} />
    </div>
  );
}

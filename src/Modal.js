import "./Form.css";
export default function Modal({ isvisible, errorMessage = null }) {
  if (isvisible) {
    return (
      <div id="modal">
        <div id="modal-css">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "the form has been submitted successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

import React from "react";

function Alert(props) {

    const capitalizeFirstLetter = (string) => {
        const lowerCase = string.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalizeFirstLetter(props.alert.type)}: </strong>{props.alert.msg}
      {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
    </div>
  );
}

export default Alert;

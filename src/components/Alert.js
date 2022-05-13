import React from "react";

function Alert(props) {
  return (
    //if props.alert && null statement will terminate
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type}</strong>:{props.alert.msg}
      </div>
    )
  );
}

export default Alert;

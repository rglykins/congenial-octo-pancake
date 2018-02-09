import React from "react";

const textfield = props => {
  return (
    <div className="form-group">
      <label for={props.key} className="col-form-label">
        {props.field}
      </label>
      <input type="text" className="form-control" id={props.key} />
    </div>
  );
};

export default textfield;

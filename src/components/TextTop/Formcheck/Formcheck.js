import React from "react";

const formcheck = props => {
  return (
    <form>
      <label className="col-form-label">{props.question}</label>
      <div className="form-check form-check-inline">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="buttons" />
          {props.one}
        </label>
      </div>
      <div className="form-check form-check-inline">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="buttons" />
          {props.two}
        </label>
      </div>
    </form>
  );
};

export default formcheck;

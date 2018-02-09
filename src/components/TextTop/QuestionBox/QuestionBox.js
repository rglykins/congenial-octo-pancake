import React from "react";

const questionBox = props => {
  const elements = props.answers.map((ans, index) => (
    <a href="#" className="list-group-item" id={props.question + index}>
      {ans}
    </a>
  ));

  return (
    <fieldset>
      <div className="row">
        <div className="col-sm-12">
          <label for={props.key}>{props.question}</label>
          <div class="list-group" id={props.key}>
            {elements}
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default questionBox;

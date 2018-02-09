import React from "react";
import Textfield from "./Textfield/Textfield";
import Formcheck from "./Formcheck/Formcheck";
import SelectBar from "./SelectBar/SelectBar";
import Rangebar from "./Rangebar/Rangebar";
import QuestionBox from "./QuestionBox/QuestionBox";
import "./TextTop.css";
const textTop = () => {
  return (
    <form>
      <fieldset>
        <legend className="col-form-legend"> Personal Info </legend>
        <div className="form-group row">
          <div className="col-sm-4">
            <Textfield field="Name" key="name" />
          </div>
          <div className="col-sm-6">
            <Textfield field="Address" key="adr" />
          </div>
          <div className="col-sm-2">
            <Textfield field="Zipcode" key="zip" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-5">
            <Textfield field="Phone Number" key="prim" />
          </div>
          <div className="col-sm-4">
            <Formcheck
              question="Would you like SMS updates on delivery status?"
              one="Yes"
              two="No"
            />
          </div>
          <div className="col-sm-3">
            <SelectBar />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-5">
            <Textfield field="Secondary Phone Number" key="prim2" />
          </div>
          <div className="col-sm-7">
            <Textfield field="Customer Email" key="email" />
          </div>
        </div>
        <legend className="col-form-legend"> Purchasing Info </legend>
        <div className="form-group row">
          <Rangebar name="How many Luminarias?" />
          <Rangebar name="Extra Candles?" />
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <h2> Total Price: $0.00</h2>
          </div>
          <div className="col-sm-3">
            <Formcheck question="How will you pay?" one="Paypal" two="Check" />
          </div>
          <div className="col-sm-3">
            <Formcheck
              question="Delivery or Pickup?"
              one="Delivery"
              two="Pickup"
            />
          </div>
          <legend className="col-form-legend"> A Few More Questions </legend>
          <QuestionBox
            question="How did you hear about this event?"
            answers={[
              "Past Customer",
              "Newspaper",
              "Flyer",
              "Student contact",
              "Parent"
            ]}
          />
          <QuestionBox
            question="What best describes your connection to the LCHS Showcase band?"
            answers={[
              "Parent",
              "Relative",
              "Newspaper",
              "Flyer",
              "Student contact",
              "Parent of Student"
            ]}
          />
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" />
              {"  "}I would like to stay on the mailing list address for future
              events
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" checked />
              {"  "}I would like to be notified of future events and fundraisers
            </label>
          </div>
          <legend> Special Instructions </legend>
          <p className="text small text-muted">
            Here you can explain anything you think we need to know to complete
            your order
          </p>
          // <textarea rows="15" cols="92" />
        </div>
      </fieldset>
    </form>
  );
};

export default textTop;

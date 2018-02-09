import React from "react";

const selectBar = () => {
  return (
    <form>
      <label className="mr-sm-2" for="inlineFormCustomSelect">
        Mobile Carrier
      </label>
      <select id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">AT&T</option>
        <option value="2">Verizon</option>
        <option value="3">Sprint</option>
        <option value="3">T-Mobile</option>
      </select>
    </form>
  );
};

export default selectBar;

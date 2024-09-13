import React from "react";

const RadioButtonOption = ({ option }) => {
  return (
    <div>
      <input type="radio" id="css" />
      <label for="html">{option}</label>
    </div>
  );
};

export default RadioButtonOption;

import React from "react";

const PrimaryButton = ({ className, label, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;

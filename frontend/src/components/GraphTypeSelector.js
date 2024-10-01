import React, { useState } from "react";

const GraphTypeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Histogram");

  const options = ["Histogram", "Line"];

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // console.log(option);
    // onSetDistribution(id, option);
    setIsOpen(false); // Close dropdown after selecting an option
  };

  return (
    <div>
      <button
        type="button"
        className="dropdownGraphType"
        onClick={handleButtonClick}
      >
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="dropdownList">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="options"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// const dropdownStyles = {
//   listStyleType: 'none',
//   margin: 0,
//   padding: '10px',
//   backgroundColor: '#f0f0f0',
//   border: '1px solid #ccc',
//   width: '150px',
// };

// const optionStyles = {
//   padding: '8px 12px',
//   cursor: 'pointer',
// };

export default GraphTypeSelector;

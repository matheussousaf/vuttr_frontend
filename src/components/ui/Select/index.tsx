import React from "react";
import Creatable from "react-select/creatable";
import { calcFontSize } from "@utils/styles";

/**
 * This component was created using the React Select API!
 * For further documentation access: https://react-select.com/home
 * 
 * Shout out to Jed Watson!
 */

const Select: React.FC = () => {
  const options = [
    { value: "nodejs", label: "Node.js" },
    { value: "backend", label: "Back-end" },
    { value: "development", label: "Development" },
  ];

  function handleChange(newValue: any, actionMeta: any) {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  }

  return (
    <Creatable
      options={options}
      isMulti
      isClearable={false}
      onChange={handleChange}
      placeholder="Ex.: Backend, development..."
      styles={{
        control: (provided, state) => ({
          ...provided,
          outline: "none",
          border: state.isSelected ? "none" : "none",
          boxShadow: "none",
          background: state.selectProps.menuIsOpen ? "#dedce1" : "#ebeaed",
        }),
        container: (provided) => ({
          ...provided,
          outline: "none",
          borderWidth: 0,
          fontFamily: "Source Sans Pro",
          fontSize: calcFontSize(16, 18),
        }),
        menu: (provided) => ({
          ...provided,
          background: "#ebeaed",
        }),
        valueContainer: (provided, state) => ({
          ...provided,
          background: state.selectProps.menuIsOpen ? "#dedce1" : "#ebeaed",
          border: "none",
          outline: "none",
          padding: state.hasValue ? "5px" : "7px 20px",
          borderRadius: 5,
        }),
        singleValue: (provided) => ({
          ...provided,
          color: "#b1adb9",
        }),
        option: (provided, state) => ({
          ...provided,
          background: state.isFocused ? "white" : "none",
          color: state.isSelected ? "#170c3a" : "none",
        }),
        multiValue: (provided) => ({
          ...provided,
          background: "white",
          padding: "2px",
          fontFamily: "Source Sans Pro",
          fontSize: calcFontSize(18, 20),
        }),
        multiValueRemove: (provided) => ({
          ...provided,
          padding: "2px 4px",
          margin: 0,
          color: "#C7C4CD",
          ":hover": {
            backgroundColor: "#E1E7FD",
            color: "#170c3a",
          },
        }),
        input: (provided) => ({
          ...provided,
          fontSize: calcFontSize(16, 18),
        }),
        placeholder: (provided) => ({
          ...provided,
          fontSize: calcFontSize(16, 18),
          fontFamily: "Source Sans Pro",
          color: "#b1adb9",
        }),
      }}
    />
  );
};

export default Select;

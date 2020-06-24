// import React from "react";
import React, { Component, useState } from "react";
import styled, { ThemeConsumer } from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useHistory } from "react-router-dom";
import "./SearchBar2.css";

var viewStr = "VIEW";
var viewStrBold = viewStr.bold();

const options = [
<<<<<<< HEAD
<<<<<<< master
  { label: "Education", value: "education" },
  { label: "Housing", value: "housing" },
  { label: "Investments", value: "investments" },
  { label: "Statements", value: "statements" },
=======
=======
>>>>>>> 991387eb4793cc2b485b986beccda466bd5b15f6
  { label: <b>View</b>, value: "#" },
  {
    label: "🎞️" + "\xa0\xa0" + "Online Demos",
    value: "education",
  },
  {
    label: "💸" + "\xa0\xa0" + "GIRO Application Status",
    value: "education",
  },
  {
    label: "📝" + "\xa0\xa0" + "Transaction History Statement",
    value: "education",
  },
  {
    label: "📝" + "\xa0\xa0" + "Contribution History Statement",
    value: "education",
  },
  { label: <b>Manage</b>, value: "#" },
  { label: "☎️" + "\xa0\xa0" + "Contact Information", value: "housing" },
  {
    label: "👴" + "\xa0\xa0" + "Top up my Retirement Account",
    value: "housing",
  },
  {
    label: "🎓" + "\xa0\xa0" + "Repayment of Education Loan",
    value: "housing",
  },
  { label: <b>Appointments</b>, value: "#" },
<<<<<<< HEAD
<<<<<<< master
  { label: "💰" + "\xa0\xa0" + "Investments", value: "investments" },
  { label: "📝" + "\xa0\xa0" + "Statements", value: "statements" },
>>>>>>> Added section headers
=======
=======
>>>>>>> 991387eb4793cc2b485b986beccda466bd5b15f6
  {
    label: "📅" + "\xa0\xa0" + "CPF Appointment Service",
    value: "investments",
  },
  {
    label: "💉" + "\xa0\xa0" + "CPF e-Medical Appointment Service",
    value: "statements",
  },
<<<<<<< HEAD
>>>>>>> Updated search list icons
=======
>>>>>>> 991387eb4793cc2b485b986beccda466bd5b15f6
];

const styledSelect = {
  maxWidth: "400px",
  margin: "0 auto",
  zIndex: "1000000",
};

const customStyle = {
  option: (provided, state) => ({
    ...provided,
    textAlign: "left",
  }),
};

// const styledSelect = styled(Select)`
//   width: 500px;
// `;

const MultiSelect = styled(Select)`
  z-index: 1000000;
  &.Select--multi {
    .Select-value {
      display: inline-flex;
      align-items: left;
    }
  }

  & .Select-placeholder {
    font-size: smaller;
  }

  .react-select__menu {
    height: 10px !important;
  }
`;

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      // primary25: '#89eff2',
      primary25: "#e4f9f5",
      primary: "#11999e",
    },
  };
}

export default (props) => {
  const history = useHistory();
  return (
    <>
      <div className="change" style={styledSelect}>
        <MultiSelect
          className="selectup"
          options={options}
          theme={customTheme}
          placeholder="🔍 What are you looking for?"
          onChange={(feature) => {
            console.log(feature.value);
            history.push("/" + feature.value);
          }}
          styles={customStyle}
        />
      </div>
    </>
  );
};

// import React from "react";
import React from "react";
import styled from "styled-components";
import Select from "react-select";
// import makeAnimated from "react-select/animated";
import { useHistory } from "react-router-dom";
import "./SearchBar2.css";

// var viewStr = "VIEW";
// var viewStrBold = viewStr.bold();

const options = [
  { label: <b>View</b>, value: "#" },
  {
    label: "🎞️\xa0\xa0Demo Videos",
    value: "demo_videos",
  },
  {
    label: "💸\xa0\xa0GIRO Application Status",
    value: "giro_status",
  },
  {
    label: "📝\xa0\xa0Transaction History Statement",
    value: "transaction_history",
  },
  {
    label: "📝\xa0\xa0Contribution History Statement",
    value: "contribution_history",
  },
  { label: <b>Manage</b>, value: "#" },
  {
    label: "☎️\xa0\xa0Contact Information",
    value: "contact_information",
  },
  {
    label: "👴\xa0\xa0Top up my Retirement Account",
    value: "topup_retirement",
  },
  {
    label: "🎓\xa0\xa0Repayment of Education Loan",
    value: "repay_education",
  },
  { label: <b>Appointments</b>, value: "#" },
  {
    label: "📅\xa0\xa0CPF Appointment Service",
    value: "appointment",
  },
  {
    label: "💉\xa0\xa0CPF e-Medical Appointment Service",
    value: "medical_appointment",
  },
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

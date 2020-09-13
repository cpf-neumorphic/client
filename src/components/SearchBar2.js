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
    text: "Demo Videos",
    value: "demo_videos",
  },
  {
    label: "💸\xa0\xa0GIRO Application Status",
    text: "GIRO Application Status",
    value: "giro_status",
    syn: "money",
  },
  {
    label: "📝\xa0\xa0Transaction History Statement",
    text: "Transaction History Statement",
    value: "transaction_history",
    syn: "money",
  },
  {
    label: "📝\xa0\xa0Contribution History Statement",
    text: "Contribution History Statement",
    value: "contribution_history",
    syn: "money",
  },
  { label: <b>Manage</b>, value: "#" },
  {
    label: "☎️\xa0\xa0Contact Information",
    text: "Contact Information",
    value: "contact_information",
    syn: "phone",
  },
  {
    label: "👴\xa0\xa0Top up my Retirement Account",
    text: "Top up my Retirement Account",
    value: "topup_retirement",
    syn: "money",
  },
  {
    label: "🎓\xa0\xa0Repayment of Education Loan",
    text: "Repayment of Education Loan",
    value: "repay_education",
    syn: "money",
  },
  { label: <b>Appointments</b>, value: "#" },
  {
    label: "📅\xa0\xa0CPF Appointment Service",
    text: "CPF Appointment Service",
    value: "appointment",
  },
  {
    label: "💉\xa0\xa0CPF e-Medical Appointment Service",
    text: "CPF e-Medical Appointment Service",
    value: "medical_appointment",
  },
];

const styledSelect = {
  maxWidth: "400px",
  margin: "0 auto",
  zIndex: "1000000",
  textAlign: "center",
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

function filterOptions(options, filterString) {
  const { syn, text } = options.data;
  if (text) {
    if (syn)
      return (
        syn.toLowerCase().includes(filterString.toLowerCase()) ||
        filterString.includes(syn.toLowerCase()) ||
        text.toLowerCase().includes(filterString.toLowerCase()) ||
        filterString.toLowerCase().includes(text.toLowerCase())
      );
    else
      return (
        text.toLowerCase().includes(filterString.toLowerCase()) ||
        filterString.toLowerCase().includes(text.toLowerCase())
      );
  } else return true;
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
          placeholder="🔍 Ask me anything!"
          onChange={(feature) => {
            console.log(feature.value);
            history.push("/" + feature.value);
          }}
          filterOption={filterOptions}
          styles={customStyle}
        />
      </div>
    </>
  );
};

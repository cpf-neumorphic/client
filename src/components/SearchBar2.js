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
    text: ["demo","videos"],
    value: "demo_videos",
  },
  {
    label: "💸\xa0\xa0GIRO Application Status",
    text: ["giro","application","status","money"],
    value: "giro_status",
  },
  {
    label: "📝\xa0\xa0Transaction History Statement",
    text: ["transaction","history","statement","money"],
    value: "transaction_history",
  },
  {
    label: "📝\xa0\xa0Contribution History Statement",
    text: ["contribution","history","statement","money"],
    value: "contribution_history",
  },
  { label: <b>Manage</b>, value: "#" },
  {
    label: "☎️\xa0\xa0Contact Information",
    text: ["contact","information","phone","number"],
    value: "contact_information",
  },
  {
    label: "👴\xa0\xa0Top up my Retirement Account",
    text: ["top","up","my","retirement","account","money"],
    value: "topup_retirement",
  },
  {
    label: "🎓\xa0\xa0Repayment of Education Loan",
    text: ["repayment","of","education","loan","money"],
    value: "repay_education",
  },
  { label: <b>Appointments</b>, value: "#" },
  {
    label: "📅\xa0\xa0CPF Appointment Service",
    text: ["cpf","appointment","service"],
    value: "appointment",
  },
  {
    label: "💉\xa0\xa0CPF e-Medical Appointment Service",
    text: ["cpf","e-medical","appointment","service"],
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
  const { text } = options.data;
  var filteredWords = filterString.split(/[!?. ]/)
  // console.log(filteredWords);
  var isFound = false;
  // const matches = []
  if (filterString){
    if (text) {
      filteredWords.forEach((e1)=>text.forEach((e2)=> 
      {
        if(e1.length>=3 && e2.includes(e1)){
        // if(e1===e2){
          // console.log("Match")
          // matches.push(e1);
          isFound = true;
        }
      }));
      // console.log(matches)
      return isFound;
  } else return true;
  }
  else{
    return true;
  }
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

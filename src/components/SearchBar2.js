// import React from "react";
import React, { Component, useState } from 'react';
import styled, { ThemeConsumer } from "styled-components";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {useHistory} from 'react-router-dom';
import "./SearchBar2.css";

const options = [
    {label: 'Education', value: 'education'},
    {label: 'Housing', value: 'housing'},
    {label: 'Investments', value: 'investments'},
    {label: 'Statements', value: 'statements'},
];

const styledSelect = {
  width: '400px',
  display: 'inline-block',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '1000000'
};

// const styledSelect = styled(Select)`
//   width: 500px;
// `;

const MultiSelect = styled(Select)`
  z-index: 1000000;
	&.Select--multi  {

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
`

function customTheme(theme){
    return{
        ...theme,
        colors: {
            ...theme.colors,
            // primary25: '#89eff2',
            primary25: '#e4f9f5',
            primary: '#11999e',
        }
    }
}

export default props => {
  const history = useHistory();
  return (
    <>
      <div className="change" style={styledSelect}>
    <MultiSelect className="selectup" options={options} theme={customTheme} placeholder="🔍 What are you looking for?" onChange={ (feature) => {
      console.log(feature.value);
      history.push("/"+feature.value)
    }}/>
    </div>
    </>
  );
};

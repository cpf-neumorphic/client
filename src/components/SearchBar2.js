// import React from "react";
import React, { Component, useState } from 'react';
import styled, { ThemeConsumer } from "styled-components";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {Redirect} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const options = [
    {label: 'Education', value: 'education'},
    {label: 'Housing', value: 'housing'},
    {label: 'Investments', value: 'investments'},
    {label: 'Statements', value: 'statements'},
];

// const styledSelect = {
//   color: '#000000',
//   fontSize: '36px',
//   width: '100px'
// };

function customTheme(theme){
    return{
        ...theme,
        colors: {
            ...theme.colors,
            primary25: '#89eff2',
            primary: '#11999e',
        }
    }
}

export default props => {
  const history = useHistory();
    // const [feature, setFeature] = useState({});
    // console.log(feature);
    
  return (
    <>
      {/* <SelectSearch options={optionss} value="None" name="language" placeholder="What are you looking for?" /> */}
      {/* <Select options={options} styles={customStyles}/> */}
    <Select options={options} theme={customTheme} placeholder="What are you looking for?" onChange={ (feature) => {
      console.log(feature.value);
      history.push("/"+feature.value)
    }}/>
    </>
  );
};

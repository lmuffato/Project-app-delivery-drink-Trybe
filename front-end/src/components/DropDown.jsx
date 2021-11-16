/* eslint-disable react/prop-types */
import React from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';

function DropDown({ name, items }) {
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <FormControl variant="outlined" sx={ { m: 1, minWidth: 200 } }>
      <InputLabel id={ name }>{name}</InputLabel>
      <Select
        labelId={ name }
        label={ name }
        // value={ value }
        // onChange={ handleChange }
      >
        {items.map((item) => <MenuItem key={ item } value={ item }>{item}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

export default DropDown;

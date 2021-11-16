import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

function Input({ label }) {
  return (
    <TextField
      autoFocus
      margin="dense"
      label={ label }
      type="text"
      required
    // value={description}
    // onChange={(e) => setDescription(e.target.value)}
    />
  );
}

export default Input;

Input.propTypes = {
  label: PropTypes.string,
}.isRequired;

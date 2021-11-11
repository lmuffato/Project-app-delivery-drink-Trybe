import React from 'react';

export default function Input(labelName, type, name, id) {
  return (
    <div>
      <label htmlFor={ id }>
        {labelName}
      </label>
      <input type={ type } name={ name } id={ id } />
    </div>
  );
}

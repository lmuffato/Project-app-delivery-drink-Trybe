import React from 'react';

export default function buttonTypeButton({ props }) {
  return (
    <button
      type="button"
      id={ props.id }
      data-testid={ props.dataTestId }
      disabled={ props.disabled ? props.disabled : false }
      onClick={ props.onclick }
    >
      { props.value }
    </button>
  );
}

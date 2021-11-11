import { useState } from 'react';

export default function useInputs() {
  const [values, setValues] = useState({});
  function storeInputValue({ target }) {
    setValues({
      ...values,
      [target.id]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  return [values, storeInputValue];
}

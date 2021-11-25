import React, { useEffect/* , useState */ } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Form = styled.form`
  padding: 10px 10px;

  & > * {
    margin-top: 20px;
  }
  .inputs {
    display: flex;
  }
  .submit {
    button {
      margin: 0 auto;
      display: block;
    }
  }
`;

function SelectSeller() {
  // const [sellers, setSellers] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <Form>
      <div className="inputs">
        <select data-testid="customer_checkout__select-seller">
          <option>Oi</option>
        </select>
        <Input
          type="text"
          label="Endereço"
          datatestid="customer_checkout__input-address"
        />
        <Input
          type="text"
          label="Número"
          datatestid="customer_checkout__input-addressNumber"
        />
      </div>
      <div className="submit">
        <Button
          type="submit"
          datatestid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </Button>
      </div>
    </Form>
  );
}

export default SelectSeller;

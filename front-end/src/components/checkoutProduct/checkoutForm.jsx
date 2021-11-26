import React from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  const { setChooseSeller, setAddress, setAddressNumber, value } = props;
  const { chooseSeller, seller, address, addressNumber } = value;
  console.log(value);
  return (
    <div>
      <form>
        <label htmlFor="vendedor" className="label-vendedor">
          Vendedor responsável
          <br />
          <select
            id="vendedor"
            data-testid="customer_checkout__select-seller"
            onChange={ (e) => setChooseSeller(e.target.value) }
            value={ chooseSeller }
          >
            {seller.map((sellerid) => (
              <option key={ sellerid.index } value={ sellerid.name }>
                {sellerid.name}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="Endereço"
          style={ { display: 'block', textAlign: 'center', marginLeft: '-80px' } }
        >
          Endereço
          <br />
          <input
            id="Endereço"
            style={ { height: '34px', width: '550px' } }
            type="text"
            placeholder="Digite seu Endereço"
            onChange={ (e) => setAddress(e.target.value) }
            value={ address }
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label
          htmlFor="numero"
          style={ { display: 'block', textAlign: 'center', marginLeft: '-80px' } }
        >
          Número
          <br />
          <input
            id="numero"
            style={ { height: '34px', width: '250px' } }
            type="text"
            placeholder="Número"
            onChange={ (e) => setAddressNumber(e.target.value) }
            value={ addressNumber }
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
      </form>
    </div>
  );
}

Form.propTypes = {
  setChooseSeller: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  setAddressNumber: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Form;

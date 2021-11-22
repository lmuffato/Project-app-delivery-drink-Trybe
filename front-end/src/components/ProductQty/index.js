import React, { useEffect } from 'react';
import { /* useSelector,  */useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateProduct } from '../../slices/cart';
import { ProductQtyContainer } from '../../styles/baseComponents';
import QtyButton from './QtyButton';

function ProductQty({ label, onChange, onRemove, onAdd, value, id }) {
  const dispatch = useDispatch();

  const priceChange = () => {
    console.log(id);
    dispatch(updateProduct({ id, quantity: value }));
  };

  useEffect(priceChange, [value]);

  return (
    <ProductQtyContainer>
      <p
        className="label"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {label}
      </p>
      <div className="bts">
        <QtyButton
          id={ id }
          position="remove"
          onClick={ onRemove }
        />
        <input
          type="text"
          value={ value }
          className="center"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ onChange }
        />
        <QtyButton
          id={ id }
          position="add"
          onClick={ onAdd }
        />
      </div>
    </ProductQtyContainer>
  );
}

ProductQty.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProductQty;

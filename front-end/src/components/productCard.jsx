import React from 'react';
import '../styles/form.css';
// import Context from '../context/Context';

function ProductCard(props) {
  console.log(props);
  // const { } = useContext(Context);

  // Styles:
  // preço: Absolute inset -1 background-opacity 70%
  // image: fill
  // Div pai: Border 1 grey, shadow
  // Div filho 1: BG White?
  // Div filho 2: BG Aquamarine

  return (
    <div>
      <div>
        <h1>Preço</h1>
        <img src="algo" alt="algo" />

      </div>
      <div>
        <span>Nome do Produto</span>
        <div>
          <button type="button"> - </button>
          <input type="number" placeholder="0" />
          <button type="button"> + </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;

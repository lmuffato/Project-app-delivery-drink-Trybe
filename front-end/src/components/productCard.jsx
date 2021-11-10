import React from 'react';
import '../styles/product.css';
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
    <section className="productContainer">
      <div className="element">
        <h1 className="absolute">Preço</h1>
        <img src="algo" alt="algo" />
      </div>
      <div>
        <span className="element">Nome do Produto</span>
        <div className="element">
          <button type="button"> - </button>
          <input type="number" placeholder="0" />
          <button type="button"> + </button>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;

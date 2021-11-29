import React, { useState, useEffect } from 'react';
import ProductSellCard from '../components/ProductSellCard';
import NavBar from '../components/NavBar';
// import postSell from '../services/requests';

function Checkout() {
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState([]);
  const dataUser = JSON.parse(localStorage.getItem('user'));
  const sellProduts = Object.values(JSON.parse(localStorage.getItem('carrinho')));

  function createSell() {
    console.log(dataUser.token, sellProdut);
    // postUser(data, toke, '/sales');
  }

  useEffect(() => {
    setProducts(sellProduts);
    const values = [];
    sellProduts.map((product) => (
      values.push(Number(product.subTotal))
    ));
    setTotalValue(parseFloat(values
      .reduce((acc, item) => acc + item, 0)).toFixed(2).replace('.', ','));
  }, []);

  return (
    <main>
      <NavBar dataUser={ dataUser } />
      <section>
        <h1>Finalizar Pedido</h1>
        <tr>
          <td>Iten</td>
          <td>Descrição</td>
          <td>Quantidade</td>
          <td>Preço Unitário</td>
          <td>Sub-total</td>
          <td>Remover Iten</td>
        </tr>
        {products.map((product, index) => (
          <ProductSellCard
            key={ index }
            product={ product }
            index={ index }
          />
        ))}
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          Total: R$
          {totalValue}
        </span>
      </section>
      <section>
        <h1>Detalhes da Entrega</h1>
        <tr>
          <td>Vendedora</td>
          <td>Endereço</td>
          <td>Numero</td>
        </tr>
        <select
          name="select"
          data-testid="customer_checkout__select-seller"
        >
          <option value="valor1">Valor 1</option>
          <option value="valor2">Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>
        <input
          data-testid="customer_checkout__input-address"
        />
        <input
          data-testid="customer_checkout__input-addressNumber"
        />
      </section>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ () => createSell() }
      >
        Finalizar Pedido
      </button>
    </main>
  );
}

export default Checkout;

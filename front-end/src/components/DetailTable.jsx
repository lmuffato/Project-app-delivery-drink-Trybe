import React from 'react';
import PropTypes from 'prop-types';

export default function DetailTable(props) {
  const { products } = props;
  // const [allProducts, setAllProducts] = useState();

  // const getProducts = useCallback(
  //   async () => {
  //     await axios({
  //       method: 'get',
  //       url: `${url}/products`,
  //       headers: {
  //         Authorization: token,
  //       },
  //     })
  //       .then((res) => {
  //         setAllProducts(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, [setAllProducts, token],
  // );

  // useEffect(() => {
  //   getProducts();
  // }, [getProducts]);

  // useEffect(() => {
  //   if (allProducts) {
  //     products.map((product) => ({
  //       id: product.product_id,
  //       quantity: product.quantity,
  //     }));
  //   }
  // }, [allProducts]);

  return (
    <table className="border-2">
      <thead>
        <tr>
          <th className="border-2 w-1/12">item</th>
          <th className="border-2">Descrição</th>
          <th className="border-2 w-1/12">Quantidade</th>
          <th className="border-2 w-1/12">Valor unitário</th>
          <th className="border-2 w-1/12">Sub-total</th>
        </tr>
      </thead>
      {
        products.map((item, index) => (
          <tbody key={ index }>
            <tr className="">
              <td
                data-testid={ `customer_order_details__
                element-order-table-item-number-${index}` }
                className="border-2 w-1/12"
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `customer_order_details__
                element-order-table-name-${index}` }
                className="border-2"
              >
                { item.name }
              </td>
              <td
                data-testid={ `customer_order_details__
                element-order-table-quantity${index}` }
                className="border-2 w-1/12"
              >
                { item.quantity }
              </td>
              <td
                data-testid={ `customer_order_details__
                element-order-table-sub-total-${index}` }
                className="border-2 w-1/12"
              >
                { item.price }
              </td>
              <td
                data-testid={ `customer_order_details__
                element-order-total-price-${index}` }
                className="border-2 w-1/12"
              >
                { item.subtotal }
              </td>
            </tr>
          </tbody>
        ))
      }
    </table>
  );
}

DetailTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  // token: PropTypes.string.isRequired,
};

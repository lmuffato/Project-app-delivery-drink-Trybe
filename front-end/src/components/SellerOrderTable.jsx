import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';

function SellerOrderTable({ sale, productsQuantities }) {
  const rows = productsQuantities.map((item, index) => (
    {
      id: index,
      name: sale.products[index].name,
      quantity: item,
      price: sale.products[index].price,
    }
  ));
  const formatValue = (value) => (
    `${parseFloat(value.toString()).toFixed(2).replace('.', ',')}`
  );

  function getSubTotal(params) {
    const unitPrice = params.getValue(params.id, 'price');
    const totalQuantity = params.getValue(params.id, 'quantity');
    return formatValue(unitPrice * totalQuantity);
  }

  const calculateSubtotal = (list) => {
    const total = list
      .reduce((tot, curr) => tot + (+(curr.price) * curr.quantity), 0);

    return total.toFixed(2);
  };

  const tableColumns = [
    {
      field: 'id',
      headerName: 'Item',
      flex: 0.25,
      type: 'number',
      renderCell: (params) => (
        <span
          data-testid={
            `seller_order_details__element-order-table-item-number--${params.id}`
          }
        >
          {params.value + 1}
        </span>),
    },
    {
      field: 'name',
      headerName: 'Descrição',
      flex: 1,
      headerAlign: 'center',
      renderCell: (params) => (
        <span
          data-testid={ `seller_order_details__element-order-table-name-${params.id}` }
        >
          {params.value}
        </span>),
    },
    {
      field: 'quantity',
      headerName: 'Quantidade',
      type: 'number',
      flex: 0.25,
      renderCell: (params) => (
        <span
          data-testid={
            `seller_order_details__element-order-table-quantity-${params.id}`
          }
        >
          {params.value}
        </span>),
    },
    {
      field: 'price',
      headerName: 'Valor Unitário',
      flex: 0.25,
      type: 'number',
      renderCell: (params) => (
        <span
          data-testid={
            `seller_order_details__element-order-table-unit-price-${params.id}`
          }
        >
          {(params.value)}
        </span>),
    },
    {
      field: 'subtotal',
      headerName: 'SubTotal',
      flex: 0.25,
      valueGetter: getSubTotal,
      renderCell: (params) => (
        <span
          data-testid={
            `seller_order_details__element-order-table-sub-total-${params.id}`
          }
        >
          {params.value}
        </span>),
    },
  ];
  return (
    <>
      <div
        style={ {
          width: '80%',
          margin: 'auto',
          backgroundColor: '#fff',
          borderRadius: 10,
          height: 400,
        } }
      >
        <DataGrid
          rows={ rows }
          columns={ tableColumns }
          pageSize={ 11 }
          // autoHeight
          disableSelectionOnClick
          disableMultipleSelection
          disableColumnMenu
          rowHeight={ 35 }
        />
      </div>
      <p>
        R$
        <span
          data-testid="seller_order_details__element-order-total-price"
        >
          { ` ${calculateSubtotal(rows).toString().replace('.', ',')}` }
        </span>
      </p>
    </>
  );
}

export default SellerOrderTable;

SellerOrderTable.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    saleDate: PropTypes.string,
    sellerId: PropTypes.number,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    userId: PropTypes.number,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      urlImage: PropTypes.string,
    })),
  }),
}.isRequired;

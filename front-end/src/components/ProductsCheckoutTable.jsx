import React from 'react';
// import PropTypes from 'prop-types';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Delete } from '@mui/icons-material';

const PRODUCTS_PER_PAGE = 15;

function ProductsCheckoutTable() {
  const rows = [{
    id: 1,
    description: 'coca-cola',
    quantity: 2,
    value: 2.5,
  }];
  function getSubTotal(params) {
    const unitPrice = params.getValue(params.id, 'value');
    const totalQuantity = params.getValue(params.id, 'quantity');
    return unitPrice * totalQuantity;
  }

  const formatValue = (value) => `R$ ${value}`;

  const tableColumns = [
    {
      field: 'id',
      headerName: 'Item',
      flex: 0.25,
      renderCell: (params) => (
        <span
          data-testid={
            `customer_checkout__element-order-table-item-number-${params.id}`
          }
        >
          {params.value}
        </span>),
    },
    {
      field: 'description',
      headerName: 'Descrição',
      flex: 1,
      headerAlign: 'center',
      renderCell: (params) => (
        <span
          data-testid={ ` customer_checkout__element-order-table-name-${params.id}` }
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
          data-testid={ ` cutomer_checkout__element-order-table-quantity-${params.id}` }
        >
          {params.value}
        </span>),
    },
    {
      field: 'value',
      headerName: 'Valor Unitário',
      flex: 0.25,
      type: 'number',
      renderCell: (params) => (
        <span
          data-testid={
            ` customer_checkout__element-order-table-unit-price-${params.id}`
          }
        >
          {formatValue(params.value)}
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
            ` customer_checkout__element-order-table-sub-total-${params.id}`
          }
        >
          {formatValue(params.value)}
        </span>),
      valueFormatter: formatValue,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 90,
      getActions: (params) => [
        <GridActionsCellItem
          key={ params.id }
          icon={ <Delete /> }
          label="Delete"
        />,
      ],
    },
  ];
  return (
    <div
      style={ {
        width: '80%', margin: 'auto', backgroundColor: '#fff', borderRadius: 10,
      } }
    >
      <DataGrid
        rows={ rows }
        columns={ tableColumns }
        pageSize={ 5 }
        rowsPerPageOptions={ [PRODUCTS_PER_PAGE] }
        autoHeight
        disableSelectionOnClick
        disableMultipleSelection
        disableColumnMenu
      />
    </div>
  );
}

export default ProductsCheckoutTable;

// ProductsCheckoutTable.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

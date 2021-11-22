import React from 'react';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/pages/Products.module.scss';

export default function Products() {
  const mockProducts = [{
    id: 1,
    name: 'Skol Lata 250ml',
    price: '2.20',
    url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
    sales: [],
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: '7.50',
    url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
    sales: [
      {
        id: 1,
        userId: 3,
        sellerId: 2,
        totalPrice: '29.30',
        deliveryAddress: 'Rua T 15 - Taquaralto - TO',
        deliveryNumber: '712',
        saleDate: '2021-12-01T00:00:00.000Z',
        status: 'concluido',
        SalesProduct: { saleId: 1, productId: 2, quantity: 6 },
      }],
  },
  ];
  return (
    <div className={ styles.productsGrid }>
      { mockProducts.map((product) => (
        <ProductCard
          key={ product.id }
          id={ product.id }
          title={ product.name }
          image={ product.url_image }
          price={ product.price }
        />
      )) }
    </div>
  );
}

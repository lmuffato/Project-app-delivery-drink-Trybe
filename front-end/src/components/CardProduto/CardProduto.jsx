import React, { useContext } from 'react';
import { arrayOf, shape } from 'prop-types';
import ProductsContext from '../../context/ProductsContext';
import PrecoProduto from './PrecoProduto';
import ImagemProduto from './ImagemProduto';
import NomeProduto from './NomeProduto';
import AddItem from './AddItem';
import QuantidadeItens from './QuantidadeItens';
import RmItem from './RmItem';
import '../../styles/CardProduct.css';

function CardProduto() {
  const { values: { isFetching, productsResult } } = useContext(ProductsContext);
  const data = productsResult;

  return !isFetching ? (
    <>
      { data
        .map((product) => (
          <section className="product-card" key={ product.id }>
            <PrecoProduto data={ product } />
            <ImagemProduto data={ product } />
            <section>
              <NomeProduto data={ product } />
              <RmItem data={ product } />
              <QuantidadeItens data={ product } />
              <AddItem data={ product } />
            </section>
          </section>
        ))}
    </>
  ) : <span>Loading ...</span>;
}

CardProduto.propTypes = {
  data: arrayOf(shape()),
}.isRequired;

export default CardProduto;

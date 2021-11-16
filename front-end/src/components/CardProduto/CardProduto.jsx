import React from 'react';
import { arrayOf, shape } from 'prop-types';
import PrecoProduto from './PrecoProduto';
import ImagemProduto from './ImagemProduto';
import NomeProduto from './NomeProduto';
import AddItem from './AddItem';
import QuantidadeItens from './QuantidadeItens';
import RmItem from './RmItem';

function CardProduto({ data }) {
  console.log(data);
  return (
    <>
      { data
        .map((product) => (
          <section className="produto-card" key={ product.id }>
            <PrecoProduto data={ product } />
            <ImagemProduto data={ product } />
            <NomeProduto data={ product } />
            <AddItem data={ product } />
            <QuantidadeItens data={ product } />
            <RmItem data={ product } />
          </section>
        ))}
    </>
  );
}

CardProduto.propTypes = {
  data: arrayOf(shape()),
}.isRequired;

export default CardProduto;

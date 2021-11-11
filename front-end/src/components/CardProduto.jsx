import React from 'react';
import { arrayOf, shape } from 'prop-types';
import PrecoProduto from './CardProduto/PrecoProduto';
import ImagemProduto from './CardProduto/ImagemProduto';
import NomeProduto from './CardProduto/NomeProduto';
import AddItem from './CardProduto/AddItem';
import QuantidadeItens from './CardProduto/QuantidadeItens';
import RmItem from './CardProduto/RmItem';

function CardProduto({ data }) {
  return (
    <>
      { data
        .map((product) => (
          <section
            className="produto-card"
            key={ product.key }
            /* onClick= */
            role="link"
            /* aria-hidden="true" */
          >
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

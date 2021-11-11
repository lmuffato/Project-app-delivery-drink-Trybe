import React from 'react';
import PropTypes from 'prop-types';

function BadgeItemFinalizado({ id, descricao, quantidade, valorUnitario }) {
  return (
    <div
      style={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
      } }
    >
      <div
        style={ {
          backgroundColor: 'green',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '20px',
          width: '10%',
          borderStartStartRadius: '10px',
          borderEndStartRadius: '10px',
        } }
      >
        <p>{ id }</p>
      </div>
      <div
        style={ {
          backgroundColor: 'blue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '20px',
          width: '30%',
        } }
      >
        <p>{ descricao }</p>
      </div>
      <div
        style={ {
          backgroundColor: 'purple',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '20px',
          width: '15%',
        } }
      >
        <p>{ quantidade }</p>
      </div>
      <div
        style={ {
          backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '20px',
          width: '15%',
        } }
      >
        <p>{ `R$ ${valorUnitario.toFixed(2)}` }</p>
      </div>
      <div
        style={ {
          backgroundColor: 'yellow',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '20px',
          width: '15%',
        } }
      >
        <p>{ `R$ ${(quantidade * valorUnitario).toFixed(2)}` }</p>
      </div>
      <div
        style={ {
          backgroundColor: 'green',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: '20px',
          width: '20%',
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
        } }
      >
        <button
          type="button"
          onClick={ () => console.log('Teste') }
          style={ {
            border: 'none',
            backgroundColor: 'green',
            color: 'white',
            height: '64px',
            fontSize: '20px',
          } }
        >
          Remover
        </button>
      </div>
    </div>
  );
}

BadgeItemFinalizado.propTypes = {
  id: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
  valorUnitario: PropTypes.number.isRequired,
};

export default BadgeItemFinalizado;

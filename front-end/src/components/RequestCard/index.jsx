import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import replaceDotToComma from '../../services/productPages/replaceDotToComa';
import { useSocket } from '../../context/socketProvider';

export default function RequestCard(
  { requestId, status, date, price, address, number, dataTestId },
) {
  const {
    dataTestIdRequest,
    dataTestIdStatus,
    dataTestIdDate,
    dataTestIdPrice,
    dataTestIdAddress } = dataTestId;

  const { socketStatus } = useSocket();
  const [myStatus, setMyStatus] = useState({ id: '', myStatus: '' });

  useEffect(() => {
    console.log('Ola mundo', socketStatus);
    if (socketStatus) setMyStatus(socketStatus);
  }, [socketStatus]);

  return (
    <div className={ styles.cardContainer }>
      <div className={ styles.requestId }>
        <span>Pedido</span>
        <span data-testid={ `${dataTestIdRequest}${requestId}` }>
          {requestId}
        </span>
      </div>
      <div className={ styles.cardSubContainer }>
        <div className={ styles.statusDatePriceContainer }>
          <div
            className={ styles[status
              .toLowerCase().replace('â', 'a').replace(' ', '')] }
          >
            <span data-testid={ `${dataTestIdStatus}${requestId}` }>
              {myStatus.id === requestId ? myStatus.myStatus : status}
            </span>
          </div>
          <div className={ styles.dateAndPrice }>
            <span data-testid={ `${dataTestIdDate}${requestId}` }>
              {date}
            </span>
            <span data-testid={ `${dataTestIdPrice}${requestId}` }>
              {replaceDotToComma(price)}
            </span>
          </div>
        </div>
        {address ? (
          <span
            className={ styles.address }
            data-testid={ `${dataTestIdAddress}${requestId}` }
          >
            {`${address} Nº ${number}`}
          </span>
        ) : (
          null
        )}
      </div>
    </div>
  );
}

RequestCard.propTypes = {
  requestId: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.func,
  price: PropTypes.string,
  address: PropTypes.string,
  number: PropTypes.string,
  dataTestIdRequest: PropTypes.string,
  dataTestIdStatus: PropTypes.string,
  dataTestIdDate: PropTypes.string,
  dataTestIdPrice: PropTypes.string,
  dataTestIdAddress: PropTypes.string,
}.isRequired;

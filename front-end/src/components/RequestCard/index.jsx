import React from 'react';
import styles from './styles.module.css';

export default function RequestCard() {
  return (
    <div className={ styles.cardContainer }>
      <div className={ styles.requestId }>pedido id</div>
      <div className={ styles.pendente }>status</div>
      <div className={ styles.dateAndPrice }>
        <span>08/04/21</span>
        <span>R$ 14,20</span>
      </div>
    </div>
  );
}

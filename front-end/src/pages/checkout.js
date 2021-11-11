import React from 'react';
import Delivery from '../components/Delivery';
import Table from '../components/Table';

function Checkout() {
	return ( 
		<div>
			<h1>Finalizar Pedido</h1>
			<Table/>
			<Delivery/>
			<button type="submit" value="FINALIZAR PEDIDO"/>
		</div>
	);
}

export default Checkout;
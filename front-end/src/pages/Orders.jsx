import React from 'react';
import CardCostumerOrder from '../components/CardCostumerOrder';

class Orders extends React.Component {
  constructor() {
    super();

    this.state = {
      allSales: [],
    };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const user = localStorage.getItem('user');
    const result = await axios.get('http://localhost:3001/sales/product', {
      headers: {
        authorization: JSON.parse(user).token,
      },
    });
    const { data } = result;
  
    this.setState({
      allSales: data,
    });
  }

  render() {
    const { role } = JSON.parse(localStorage.user);
    const { allSales } = this.state;

    return (
      <div>
        { allSales.map((sale, index) => (
          <CardCostumerOrder
            key={ `${sale}${index}` }
            sale={ sale }
            role={ role }
          />
        )) }
      </div>
    );
  }
}

export default Orders;

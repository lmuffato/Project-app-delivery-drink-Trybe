import React from 'react';
import CardProduct from '../Components/CardProduct';
import Navbar from '../Components/NavBar';

export default function CustomerProducts() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <main>
        <CardProduct />
      </main>
    </main>
  );
}

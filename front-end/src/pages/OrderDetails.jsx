import React from 'react';
import Navbar from '../Components/NavBar';
import { useParams } from "react-router-dom";
// import React, { useEffect, useState, useContext } from 'react';

export default function OrderDetails({ match }) {
  const { id } = match.params;
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getSellersList();
  //   setIsLoading(false);
  // }, []);

  // const printUrl = () => {
  //   const params = useParams();
  //     console.log(params);
  // };

  console.log(id);

  return (
    <div>
      {/* { printUrl() } */}
      <Navbar />
    </div>
  );
}

import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from '../Components/NavBar';

export default function OrderDetails() {
  const params = useParams();
  // const [urlId, setUrlId] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const printUrl = () => {
    console.log(params);
    // }
  };

  useEffect(() => {
    printUrl();
  }, []);

  return (
    <div>
      {/* { printUrl() } */}
      <Navbar />
    </div>
  );
}

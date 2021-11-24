import React from 'react';
import '../styles/Products.css';
import { useLocation } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { isJwtExpired } from 'jwt-check-expiration';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import NavBar from '../components/NavBar';
import ProductCard from '../components/molecules/ProductCard';
/* import Carousel from '../components/Carousel'; */
import CartBox from '../components/atoms/CartBox';

export default function Products() {
  // const [token, setToken] = useState('');
  const location = useLocation();
  SwiperCore.use([Pagination, Navigation]);

  const renderNavBar = () => {
    if (location.pathname !== 'login' && location.pathname !== 'register') {
      return (<NavBar />);
    }
  };

  // const user = JSON.parse(localStorage.getItem('user'));

  // if (isJwtExpired(user.token)) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <>
      { renderNavBar() }
      {/* <Carousel /> */}
      <div className="products">
        <ProductCard />

        {/* <Swiper
          slidesPerView={ 3 }
          spaceBetween={ 30 }
          slidesPerGroup={ 3 }
          loop
          loopFillGroupWithBlank
          pagination
          navigation
          className="mySwiper"
        >
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
        </Swiper> */}
        <CartBox />
      </div>
    </>
  );
}

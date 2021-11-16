import React from 'react';
import '../styles/Products.css';
import { useLocation } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import NavBar from '../components/NavBar';
import ProductCard from '../components/molecules/ProductCard';
import Carousel from '../components/Carousel';
import CartBox from '../components/atoms/CartBox';

export default function Products() {
  const location = useLocation();
  SwiperCore.use([Pagination, Navigation]);
  const renderNavBar = () => {
    if (location.pathname !== 'login' && location.pathname !== 'register') {
      return (<NavBar />);
    }
  };

  return (
    <div>
      <div>
        { renderNavBar() }
        <Carousel />
      </div>
      <div className="products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
    </div>
  );
}

import React from 'react';

export default function Carousel() {
  return (
    <div className="container" id="slider-container">
      <div
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        id="slider"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            className="active"
            data-bs-target="#slider"
            data-bs-slide-to="0"
            arial-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          />
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.jcsocialmedia.com/wp-content/uploads/heineken-banner.jpg" className="drink-img d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.stellaartois.com/content/stellaartois/en_cn/home/jcr:content/contentPar/section/full-section-content/carousel/carousel2/image.img.png/rotor-banner04.png" className="drink-img d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.meioemensagem.com.br/wp-content/uploads/2019/01/Brahma-Background-1600x464.jpg" className="drink-img d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://topagency.com/app/uploads/2019/12/Budweiser_BannerImage.jpg" className="drink-img d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://emporiodacerveja.vteximg.com.br/arquivos/ids/175666/Beck?v=637165067494200000%27s_banner_novo.jpg" className="drink-img d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://clubedomalte.fbitsstatic.net/img/b/28ff70c0-d1a1-4207-8ed2-dae8a45f5731.jpg?origem=Banner/2018/6/26/28ff70c0-d1a1-4207-8ed2-dae8a45f5731.jpg" className="drink-img d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

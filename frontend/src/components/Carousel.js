import React from "react";
// import bassinImg from '../assets/images/3_bassin.jpg';
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Carousel = () => {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
      <div key={i}>
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider dots={true}>{renderSlides()}</Slider>
    </div>
  );
}

export default Carousel
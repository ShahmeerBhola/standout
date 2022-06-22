import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function slider({children}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,


  };
  return (
    <div className="h-fit">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default slider;

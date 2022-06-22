import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  };
  return (
    <div className="h-fit">
      <Slider {...settings}>
        <div>
          <img src="/Images/slider1.jpg" className="w-full h-[450px] object-cover"/>
        </div>
        <div>
          <img src="/Images/slider1.jpg" className="w-full h-[450px] object-cover"/>
        </div>
        <div>
        <img src="/Images/slider1.jpg" className="w-full h-[450px] object-cover"/>
        </div>
      </Slider>
    </div>
  );
}

export default slider;

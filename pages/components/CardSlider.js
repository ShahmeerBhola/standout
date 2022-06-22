import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from  '../../styles/Home.module.css'
import {BiArrowBack} from 'react-icons/bi';
import {HiOutlineArrowRight} from 'react-icons/hi';
// prevArrow: '<button class="slide-arrow prev-arrow"></button>',
// nextArrow: '<button class="slide-arrow next-arrow"></button>'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        className='slide-arrow prev-arrow absolute border-2 -right-[72px] top-[150px] text-2xl rounded-full text-center w-[50px] h-[50px] '
        onClick={onClick}
      ><HiOutlineArrowRight className="text-center w-11/12 mx-auto text-[#18172066]"/></button>
    );
  }
 
//   position: absolute;
//   left: -44px;
//   top: 161px;
//   font-size: 25px;
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className='slide-arrow prev-arrow absolute border-2 -left-[72px] top-[150px] text-2xl rounded-full text-center w-[50px] h-[50px] '
        onClick={onClick}
      ><BiArrowBack className="text-center w-11/12 mx-auto text-[#18172066]"/></button>
    );
  }

function CardSlider({children,type}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: type,
    slidesToScroll: 1,
    autoplay: false ,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    // autoplaySpeed: 2000,

  };
  return (
    <div className=" m-2 w-10/12 mx-auto pt-[50px]   ">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default CardSlider;

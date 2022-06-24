import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProductSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const images=[{
    id:"1",
    img:"/Images/pro-detail1-1.png",
  },
  {
    id:"2",
    img:"/Images/pro-detail1-1.png",
  },
  {
    id:"3",
    img:"/Images/pro-detail2.png",
  },
  {
    id:"4",
    img:"/Images/pro-detail2-2.png",
  }]
  const settings1 = {
    dots: false,
    arrows:false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: false ,
  }

  const settings = {
    dots: false,
    arrows:false,
    infinite: false,
    speed: 1000,
    autoplay: false ,
      responsive: [
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
    vertical:true,

            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }

  ]

    // autoplaySpeed: 2000,

  };

    return (
      <>
 <div className='  lg:!w-[90px]  ' > 
 <Slider 
      {...settings}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={6}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {
            images.map((items,index)=>(
                <div className='!h-[80px] active:border-primary  !w-[86px] !flex mb-3  !gap-3 !justify-center !items-center border rounded-lg ' key={items.id}>
                    <img className='!h-fit' src={items.img} />
                </div>
            ))
        }
      </Slider>
 </div>
      <div className=' !h-[450px]  ml-3  lg:w-[330px] xl:w-[450px] border-2 rounded-lg'>
      <Slider {...settings1}  asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
      {
            images.map((items,index)=>(
                <div className='!flex h-[450px] justify-center items-center text-center' key={items.id}>
                    <img className=' w-[394px] ' src={items.img} />
                </div>
            ))
        }
      </Slider>
      </div>
      </>
      

  );
}
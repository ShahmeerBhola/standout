import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import Slider from "../components/slider";


function Brands() {
  return (
            <div className='w-full overflow-hidden'>
            <Slider>
        <div className="slider1 relative group w-full  h-[450px] bg-cover bg-center bg-no-repeat">
          <div className="absolute left-[20px]  md:left-[60px] top-[170px] md:top-[150px]">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              REVOLUTION
              <br />
              <span className="text-primary">LAUNCH</span>
            </h2>
            <div className="flex flex-row w-[130px] px-3 py-3 gap-2 mt-[30px] md:mt-[40px] rounded-lg bg-primary text-white items-center">
              <BiShoppingBag fontSize="16px" />
              <span>Shop Now</span>
            </div>
          </div>
        </div>
        <div className="slider1 relative group w-full  h-[450px] bg-cover bg-center bg-no-repeat">
          <div className="absolute  left-[80px] top-[120px]">
            <h2 className="text-7xl font-bold text-white">
              REVOLUTION
              <br />
              <span className="text-primary">LAUNCH</span>
            </h2>
            <div className="flex flex-row w-[130px] px-3 py-3 gap-2 mt-[50px] rounded-lg bg-primary text-white items-center">
              <BiShoppingBag fontSize="16px" />
              <span>Shop Now</span>
            </div>
          </div>
        </div>
        <div className="slider1 relative group w-full  h-[450px] bg-cover bg-center bg-no-repeat">
          <div className="absolute  left-[80px] top-[120px]">
            <h2 className="text-7xl font-bold text-white">
              REVOLUTION
              <br />
              <span className="text-primary">LAUNCH</span>
            </h2>
            <div className="flex flex-row w-[130px] px-3 py-3 gap-2 mt-[50px] rounded-lg bg-primary text-white items-center">
              <BiShoppingBag fontSize="16px" />
              <span>Shop Now</span>
            </div>
          </div>
        </div>
      </Slider>
    <div className="w-11/12 md:w-10/12 mx-auto py-[80px] overflow- ">
      <div className=" flex flex-col gap-3 justify-center !text-center ">
        <h2 className="text-4xl font-bold">Our 700+ top brands</h2>
        <span className="text-primary underline font-semibold">
          Shop all of our top brands
        </span>
        <div className="grid-cols-2 md:grid-cols-4 grid  lg:grid-cols-6 pt-3">
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/1.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/7.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/2.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/4.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/5.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/6.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/8.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/3.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/9.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/10.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/11.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/12.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/13.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/14.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/15.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/16.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/17.png" />
          <img className="md:h-[80px] w-[80%] lg:h-[100px]" src="/Images/brands/18.png" />
        </div>
      </div>
      <div className="flex flex-col mmd:flex-row gap-4 pt-[80px]">
        <div className="flex flex-col w-full mmd:w-1/2 gap-4">
          <div className=" relative  group marine h-[250px] bg-cover bg-center bg-no-repeat w-full">
            <div className=" absolute group1 left-[40px] bottom-[25px]">
              <h2 className="text-5xl font-bold text-white">Marine</h2>
              <div className="flex  card mt-[10px]  flex-row w-[130px] px-3 py-2 gap-2 bg-primary text-white items-center">
                <BiShoppingBag fontSize="16px" />
                <span>Shop Now</span>
              </div>
            </div>
          </div>
          <div className=" relative group w-full fish h-[250px] bg-cover bg-center bg-no-repeat">
            <div className="absolute  group1 left-[40px] bottom-[25px]">
              <h2 className="text-5xl font-bold text-white">Fishing</h2>
              <div className="flex  card flex-row mt-[10px] w-[130px] px-3 py-2 gap-2 bg-primary text-white items-center">
                <BiShoppingBag fontSize="16px" />
                <span>Shop Now</span>
              </div>
            </div>
          </div>
          <div className=" relative group w-full diving h-[250px] bg-cover bg-center bg-no-repeat ">
            <div className="absolute  group1 left-[40px]  bottom-[25px]">
              <h2 className="text-5xl font-bold text-white">
                Diving & Spearfishing
              </h2>
              <div className="flex card  mt-[10px] flex-row w-[130px] px-3 py-2 gap-2 bg-primary text-white items-center">
                <BiShoppingBag fontSize="16px" />
                <span>Shop Now</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mmd:w-1/2 gap-4">
          <div className=" relative group w-full water h-[516px] bg-cover bg-center bg-no-repeat ">
            <div className="absolute group1 left-[40px]  bottom-[25px]">
              <h2 className="text-5xl font-bold text-white">
                Water sports
              </h2>
              <div className="flex card mt-[10px]   flex-row w-[130px] px-3 py-2 gap-2 bg-primary text-white items-center">
                <BiShoppingBag fontSize="16px" />
                <span>Shop Now</span>
              </div>
            </div>
          </div>
          <div className=" relative group w-full camping h-[250px] bg-cover bg-center bg-no-repeat ">
            <div className="absolute  group1 left-[40px]  bottom-[25px]">
              <h2 className="text-5xl font-bold text-white">
                Camping
              </h2>
              <div className="card mt-[10px]    flex w-[130px] px-3 py-2 gap-2 bg-primary text-white items-center">
                <BiShoppingBag fontSize="16px" />
                <span>Shop Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
  );
}

export default Brands;

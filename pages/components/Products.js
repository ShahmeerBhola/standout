import React from "react";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BiShoppingBag, BiSearchAlt2, BiHome } from "react-icons/bi";
import CardSlider from "./CardSlider";
import styles from '../../styles/Home.module.css'



function Products() {
  return (
    <div className="bg-light  py-[65px] overflow-hidden ">
      <div className="w-10/12 mx-auto">
        <div className=" flex flex-col gap-3 justify-center !text-center ">
          <h2 className="text-4xl font-bold">Latest Products</h2>
          <span className="text-primary underline font-semibold">
            Shop all latest products
          </span>
        </div>

        {/* <div className="flex flex-row  pt-[50px] gap-3 w-10/12 mx-auto"> */}
          <CardSlider type="4">
              {/* Product1 */}
    {/* className={`${styles["slick-slide"]}`} */}

          <div className="hover:bg-white flex group  flex-col p-3   md:!w-[95%] !w-[97%] border rounded-md relative overflow-hidden">
            <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />
            <div className="absolute flex items-end -top-[20px] -left-[40px] pb-[7px] justify-center  w-[100px] h-[57px] text-center -rotate-45 text-white text-xs bg-primary font-bold">
              New
            </div>
            <img className="h-[190px] pt-[30px]" src="/Images/product1.png" />
            <div className="flex group1 flex-col gap-2  items-start  ">
              <h2 className="text-base font-bold">Honu dive suit</h2>
              <p className="text-[#181720b3] font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="text-xl font-bold">$350.00</span>
            </div>
            <div className="flex gap-2  pt-2  items-center card ">
              <div className="border p-1.5 border-primary rounded-[4px]">
                <AiOutlineHeart className="text-primary" />
              </div>
              <div className="flex text-white rounded-[4px] bg-primary w-full gap-3 p-1  items-center justify-center">
                <BiShoppingBag />
                <span>Add to Cart</span>
              </div>
            </div>
          </div>
          {/* Product2 */}
          <div className="hover:bg-white flex group  flex-col p-3 md:!w-[95%] !w-[97%] border rounded-md relative overflow-hidden">
            <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />
            <div className="absolute flex items-end -top-[20px] -left-[40px] pb-[7px] justify-center  w-[100px] h-[57px] text-center -rotate-45 text-white text-xs bg-[#198c29] font-bold">
              Sale
            </div>
            <img className="h-[190px] pt-[30px]" src="/Images/product2.png" />
            <div className="flex flex-col group1 gap-2  items-start  ">
              <h2 className="text-base font-bold">Honu dive suit</h2>
              <p className="text-[#181720b3] font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="text-xl font-bold">$350.00</span>
            </div>
            <div className="flex gap-2  pt-2  items-center card ">
              <div className="border p-1.5 border-primary rounded-[4px]">
                <AiOutlineHeart className="text-primary" />
              </div>
              <div className="flex text-white rounded-[4px] bg-primary w-full gap-3 p-1  items-center justify-center">
                <BiShoppingBag />
                <span>Add to Cart</span>
              </div>
            </div>
          </div>
          {/* Product 3 */}
          <div className="hover:bg-white flex group   flex-col p-3 md:!w-[95%] !w-[97%] border rounded-md relative overflow-hidden">
            <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />
            <div className="absolute flex items-end -top-[20px] -left-[40px] pb-[7px] justify-center  w-[100px] h-[57px] text-center -rotate-45 text-white text-[10px] bg-[#f12222] font-bold">
              20% OFF
            </div>
            <img className="h-[190px] pt-[30px]" src="/Images/product3.png" />
            <div className="flex flex-col group1 gap-2  items-start  ">
              <h2 className="text-base font-bold">Honu dive suit</h2>
              <p className="text-[#181720b3] font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="text-xl font-bold">$350.00</span>
            </div>
            <div className="flex gap-2  pt-2  items-center card ">
              <div className="border p-1.5 border-primary rounded-[4px]">
                <AiOutlineHeart className="text-primary" />
              </div>
              <div className="flex text-white rounded-[4px] bg-primary w-full gap-3 p-1  items-center justify-center">
                <BiShoppingBag />
                <span>Add to Cart</span>
              </div>
            </div>
          </div>
          {/* Product4 */}
          <div className="hover:bg-white flex group    flex-col p-3 md:!w-[95%] !w-[97%] border rounded-md relative overflow-hidden">
            <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />
            <div className="absolute flex items-end -top-[20px] -left-[40px] pb-[7px] justify-center  w-[100px] h-[57px] text-center -rotate-45 text-white text-xs bg-[#aeaeae] font-bold">
              Sold
            </div>
            <img className="h-[190px] pt-[30px]" src="/Images/product4.png" />
            <div className="flex flex-col gap-2 group1  items-start  ">
              <h2 className="text-base font-bold">Honu dive suit</h2>
              <p className="text-[#181720b3] font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="text-xl font-bold">$350.00</span>
            </div>
            <div className="flex gap-2  pt-2  items-center card ">
              <div className="border p-1.5 border-primary rounded-[4px]">
                <AiOutlineHeart className="text-primary" />
              </div>
              <div className="flex text-white rounded-[4px] bg-primary w-full gap-3 p-1  items-center justify-center">
                <BiShoppingBag />
                <span>Add to Cart</span>
              </div>
            </div>
          </div>
          {/* Product5 */}
          <div className="hover:bg-white flex group  flex-col md:!w-[95%] !w-[97%] p-3 border rounded-md relative overflow-hidden" >
            <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />
            <div className="absolute flex items-end -top-[20px] -left-[40px] pb-[7px] justify-center  w-[100px] h-[57px] text-center -rotate-45 text-white text-[10px] bg-[#f12222] font-bold">
              20% OFF
            </div>
            <img className="h-[190px] pt-[30px]" src="/Images/product3.png" />
            <div className="flex flex-col gap-2 group1  items-start  ">
              <h2 className="text-base font-bold">Honu dive suit</h2>
              <p className="text-[#181720b3] font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="text-xl font-bold">$350.00</span>
            </div>
            <div className="flex gap-2  pt-2  items-center card ">
              <div className="border p-1.5 border-primary rounded-[4px]">
                <AiOutlineHeart className="text-primary" />
              </div>
              <div className="flex text-white rounded-[4px] bg-primary w-full gap-3 p-1  items-center justify-center">
                <BiShoppingBag />
                <span>Add to Cart</span>
              </div>
            </div>
          </div>              
          </CardSlider>
          
                   {/* </div> */}
      </div>
    </div>
  );
}

export default Products;

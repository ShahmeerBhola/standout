import React from "react";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BiShoppingBag, BiSearchAlt2, BiHome } from "react-icons/bi";

function Products1() {
  return (
    <div className="bg-white  py-[65px] ">
      <div className="w-10/12 mx-auto">
        <div className=" flex flex-col gap-3 justify-center !text-center ">
          <h2 className="text-4xl font-bold">Best-Selling Products</h2>
          <span className="text-primary underline font-semibold">
            Shop all best products
          </span>
        </div>

        <div className="flex flex-row pt-[50px] gap-3 w-10/12 mx-auto">
            {/* Product1 */}
          <div className=" flex group group1 flex-col p-3 bg-light hover:bg-white gap-3  w-1/4 border rounded-md relative overflow-hidden">
            <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />
            <div className="absolute flex items-end -top-[20px] -left-[40px] pb-[7px] justify-center  w-[100px] h-[57px] text-center -rotate-45 text-white text-xs bg-primary font-bold">
              New
            </div>
            <img className="h-[190px] pt-[30px]" src="/Images/product1.png" />
            <div className="flex flex-col gap-2  items-start  ">
              <h2 className="text-base font-bold">Honu dive suit</h2>
              <p className="text-[#181720b3] font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="text-xl font-bold">$350.00</span>
            </div>
            <div className="group-hover:flex gap-2 items-center hidden ">
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
          <div className=" flex group group1 bg-light hover:bg-white flex-col p-3 gap-5  w-1/4 border rounded-md relative overflow-hidden">
            <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />
            <div className="absolute flex items-end -top-[20px] -left-[40px] pb-[7px] justify-center  w-[100px] h-[57px] text-center -rotate-45 text-white text-xs bg-[#198c29] font-bold">
              Sale
            </div>
            <img className="h-[190px] pt-[30px]" src="/Images/product2.png" />
            <div className="flex flex-col gap-2  items-start  ">
              <h2 className="text-base font-bold">Honu dive suit</h2>
              <p className="text-[#181720b3] font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="text-xl font-bold">$350.00</span>
            </div>
            <div className="group-hover:flex gap-2 items-center hidden ">
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
          <div className=" flex group group1 bg-light hover:bg-white flex-col p-3 gap-5  w-1/4 border rounded-md relative overflow-hidden">
            <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />
            <div className="absolute flex items-end -top-[20px] -left-[40px] pb-[7px] justify-center  w-[100px] h-[57px] text-center -rotate-45 text-white text-[10px] bg-[#f12222] font-bold">
              20% OFF
            </div>
            <img className="h-[190px] pt-[30px]" src="/Images/product3.png" />
            <div className="flex flex-col gap-2  items-start  ">
              <h2 className="text-base font-bold">Honu dive suit</h2>
              <p className="text-[#181720b3] font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="text-xl font-bold">$350.00</span>
            </div>
            <div className="group-hover:flex gap-2 items-center hidden ">
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
          <div className=" flex group group1 bg-light hover:bg-white flex-col p-3 gap-5  w-1/4 border rounded-md relative overflow-hidden">
            <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />
            <div className="absolute flex items-end -top-[20px] -left-[40px] pb-[7px] justify-center  w-[100px] h-[57px] text-center -rotate-45 text-white text-xs bg-[#aeaeae] font-bold">
              Sold
            </div>
            <img className="h-[190px] pt-[30px]" src="/Images/product4.png" />
            <div className="flex flex-col gap-2  items-start  ">
              <h2 className="text-base font-bold">Honu dive suit</h2>
              <p className="text-[#181720b3] font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="text-xl font-bold">$350.00</span>
            </div>
            <div className="group-hover:flex gap-2 items-center hidden ">
              <div className="border p-1.5 border-primary rounded-[4px]">
                <AiOutlineHeart className="text-primary" />
              </div>
              <div className="flex text-white rounded-[4px] bg-primary w-full gap-3 p-1  items-center justify-center">
                <BiShoppingBag />
                <span>Add to Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products1;

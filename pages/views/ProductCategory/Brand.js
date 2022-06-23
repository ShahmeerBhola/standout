import React from "react";
import { AiOutlineHeart, AiOutlineStar,AiOutlineLeft,AiOutlineRight,AiOutlineDown } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

function Brand() {
  return (
    <div className="w-full overflow-hidden">
      <hr />
      <div className="w-10/12 mx-auto">
        <div className="flex gap-1 pt-3 text-dark1 font-bold text-sm">
          <span className="text-primary">Home / </span>
          <span className="text-primary"> Search / </span>
          Brand
        </div>
        <div className="flex flex-col gap-3 lg:flex-row justify-center items-center py-2 lg:py-0 lg:justify-between">
          <h2 className="text-xl text-dark1 text-center lg:text-start">
            26 results found for{" "}
            <span className="text-darker font-bold"> AZCompany</span>
          </h2>
          <div className="flex flex-wrap justify-center items-baseline gap-2 text-[14px] text-dark1 ">
            <h2 className=" font-black">Filter by:</h2>
            <h2 className="hover:underline hover:text-primary cursor-pointer">
              New
            </h2>
            <div className="underline text-primary border border-y-0 cursor-pointer px-2">
              Price: Low to high
            </div>
            <h2 className="hover:underline hover:text-primary cursor-pointer">
              Price: High to low
            </h2>
          </div>
        </div>
        <div className="flex gap-10 py-5">
          <div className="w-1/4 gap-5 hidden lg:flex flex-col">
            {/* category1 */}
            <div className="flex flex-col border gap-3 rounded-lg py-5 px-3.5">
              <div className="flex justify-between text-[13px] font-bold ">
                <h2>Category</h2>
                <AiOutlineDown/>

              </div>
              <input
                className="bg-[#f3f3f3] outline-none border-none w-full text-[14px] p-2.5"
                placeholder="Search"
              />
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span>Fishing gear (3)</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span> Water sports (5)</span>
              </div>
            </div>
            {/* category2 */}
            <div className="flex flex-col border gap-3 rounded-lg py-5 px-3.5">
              <div className="flex justify-between text-[13px] font-bold ">
                <h2>Size</h2>
                <AiOutlineDown/>

              </div>
              <input
                className="bg-[#f3f3f3] outline-none border-none w-full text-[14px] p-2.5"
                placeholder="Search"
              />
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span>S (3)</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span> M (5)</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span>L (3)</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span> XL (5)</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span>XXL (3)</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span> XXXL (5)</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span>2XL (3)</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span> 3XL (5)</span>
              </div>
            </div>
            {/* category3 */}
            <div className="flex flex-col border gap-3 rounded-lg py-5 px-3.5">
              <div className="flex justify-between text-[13px] font-bold ">
                <h2>Price</h2>
                <AiOutlineDown/>
              </div>
              <input
                className="bg-[#f3f3f3] outline-none border-none w-full text-[14px] p-2.5"
                placeholder="Search"
              />
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span> $0 - $20</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span> $20 - $50</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span> $50 - $100</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span> $100 - $150</span>
              </div>
              <div className="flex text-[13px] font-bold items-center pl-2 gap-2">
                <input type="checkbox" />
                <span> $150 - $300</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 flex flex-col gap-3">
            <div className="flex gap-1  text-darker font-bold text-[15px]">
              <span className="text-primary">Brand / </span>
              Company Details
            </div>
            <div className="flex flex-col md:flex-row px-6 gap-2 md:gap-10 py-3 items-center border rounded-md">
              <img className="w-[110px] h-[90px]" src="/Images/brands/1.png" />
              <p className="text-[13px] text-dark1">
                Company has been manufacturing cutting edge fishing hooks since
                1856. Our undevoted passion to fishing is the real driving force
                that hows us to truly meet the needs of the most watchful angles
                all over the world. Better stronger sharper
              </p>
            </div>
            <div className="grid md:grid-cols-2 mmd:grid-cols-3 lg:!grid-cols-3   gap-3  mmd:mx-0 mmd:w-full">
              {/* Product1 */}

              <div className=" flex group bg-white flex-col p-3 gap-5  w-full border rounded-md relative overflow-hidden">
              <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />

                <img
                  className="h-[190px] w-[150px] md:w-3/4 lg:w-2/3 mx-auto pt-[30px]"
                  src="/Images/product1.png"
                />
                <div className="flex group1 flex-col gap-2  items-start  ">
                  <h2 className="text-base font-bold">Honu dive suit</h2>
                  <p className="text-[#181720b3] font-normal text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <span className="text-xl font-bold">$350.00</span>
                </div>
                <div className="card flex gap-2 items-center  ">
                  <div className="border p-1.5 border-primary rounded-[4px]">
                    <AiOutlineHeart className="text-primary" />
                  </div>
                  <div className="flex text-white rounded-[4px] bg-primary w-full gap-3 p-1  items-center justify-center">
                    <BiShoppingBag />
                    <span>Add to Cart</span>
                  </div>
                </div>
              </div>
              {/* Product 2 */}
              <div className=" flex group bg-white flex-col p-3 gap-5  w-full border rounded-md relative overflow-hidden">
              <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />

                <img
                  className="h-[190px] w-[150px] md:w-3/4 lg:w-2/3 mx-auto pt-[30px]"
                  src="/Images/product2.png"
                />
                <div className="flex group1 flex-col gap-2  items-start  ">
                  <h2 className="text-base font-bold">Honu dive suit</h2>
                  <p className="text-[#181720b3] font-normal text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <span className="text-xl font-bold">$350.00</span>
                </div>
                <div className="card flex gap-2 items-center  ">
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
              <div className=" flex group bg-white flex-col p-3 gap-5  w-full border rounded-md relative overflow-hidden">
                <AiOutlineStar className="absolute right-4 text-[#eccb1d] text-lg" />

                <img
                  className="h-[190px] w-[150px] md:w-3/4 lg:w-2/3 mx-auto pt-[30px]"
                  src="/Images/product3.png"
                />
                <div className="flex group1 flex-col gap-2  items-start  ">
                  <h2 className="text-base font-bold">Honu dive suit</h2>
                  <p className="text-[#181720b3] font-normal text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <span className="text-xl font-bold">$350.00</span>
                </div>
                <div className="card flex gap-2 items-center  ">
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
              <div className=" flex group bg-white flex-col p-3 gap-5  w-full border rounded-md relative overflow-hidden">
                <img
                  className="h-[190px] w-[150px] md:w-3/4 lg:w-2/3 mx-auto pt-[30px]"
                  src="/Images/product4.png"
                />
                <div className="flex group1 flex-col gap-2  items-start  ">
                  <h2 className="text-base font-bold">Honu dive suit</h2>
                  <p className="text-[#181720b3] font-normal text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <span className="text-xl font-bold">$350.00</span>
                </div>
                <div className="flex gap-2 items-center card ">
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
              <div className=" flex group bg-white flex-col p-3 gap-5  w-full border rounded-md relative overflow-hidden">
                <img
                  className="h-[190px] w-[150px] md:w-3/4 lg:w-2/3 mx-auto pt-[30px]"
                  src="/Images/product2.png"
                />
                <div className="flex group1 flex-col gap-2  items-start  ">
                  <h2 className="text-base font-bold">Honu dive suit</h2>
                  <p className="text-[#181720b3] font-normal text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <span className="text-xl font-bold">$350.00</span>
                </div>
                <div className="card flex gap-2 items-center  ">
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
              <div className=" flex group bg-white flex-col p-3 gap-5  w-full border rounded-md relative overflow-hidden">
                <img
                  className="h-[190px] w-[150px] md:w-3/4 lg:w-2/3 mx-auto pt-[30px]"
                  src="/Images/product3.png"
                />
                <div className="flex group1 flex-col gap-2  items-start  ">
                  <h2 className="text-base font-bold">Honu dive suit</h2>
                  <p className="text-[#181720b3] font-normal text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <span className="text-xl font-bold">$350.00</span>
                </div>
                <div className="card flex gap-2 items-center  ">
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
              <div className=" flex group bg-white flex-col p-3 gap-5  w-full border rounded-md relative overflow-hidden">
                <img
                  className="h-[190px] w-[150px] md:w-3/4 lg:w-2/3 mx-auto pt-[30px]"
                  src="/Images/product4.png"
                />
                <div className="flex group1 flex-col gap-2  items-start  ">
                  <h2 className="text-base font-bold">Honu dive suit</h2>
                  <p className="text-[#181720b3] font-normal text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <span className="text-xl font-bold">$350.00</span>
                </div>
                <div className="flex gap-2 items-center card ">
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
              <div className=" flex group bg-white flex-col p-3 gap-5  w-full border rounded-md relative overflow-hidden">
                <img
                  className="h-[190px] w-[150px] md:w-3/4 lg:w-2/3 mx-auto pt-[30px]"
                  src="/Images/product2.png"
                />
                <div className="flex group1 flex-col gap-2  items-start  ">
                  <h2 className="text-base font-bold">Honu dive suit</h2>
                  <p className="text-[#181720b3] font-normal text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <span className="text-xl font-bold">$350.00</span>
                </div>
                <div className="card flex gap-2 items-center  ">
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
              <div className=" flex group bg-white flex-col p-3 gap-5  w-full border rounded-md relative overflow-hidden">
                <img
                  className="h-[190px] w-[150px] md:w-3/4 lg:w-2/3 mx-auto pt-[30px]"
                  src="/Images/product3.png"
                />
                <div className="flex group1 flex-col gap-2  items-start  ">
                  <h2 className="text-base font-bold">Honu dive suit</h2>
                  <p className="text-[#181720b3] font-normal text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <span className="text-xl font-bold">$350.00</span>
                </div>
                <div className="card flex gap-2 items-center  ">
                  <div className="border p-1.5 border-primary rounded-[4px]">
                    <AiOutlineHeart className="text-primary" />
                  </div>
                  <div className="flex text-white rounded-[4px] bg-primary w-full gap-3 p-1  items-center justify-center">
                    <BiShoppingBag />
                    <span>Add to Cart</span>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            <div className="flex justify-between ">
                <h2 className="tet-[13px] font-bold">Showing 1-32 of 34 results</h2>
                <div className="flex items-center mt-[40px] md:mt-0 gap-2 ">
                    <div className="p-1 border cursor-pointer bg-primary text-white rounded-sm">
                        <AiOutlineLeft/>
                    </div>
                    <div className="flex gap-3 cursor-pointer ">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <div className="p-1 bg-primary cursor-pointer  text-white  border rounded-sm">
                        <AiOutlineRight/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;

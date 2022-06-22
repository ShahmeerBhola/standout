import React from "react";
import { AiOutlineHeart, AiOutlineStar,AiOutlineArrowRight } from "react-icons/ai";
import { BiShoppingBag, BiSearchAlt2, BiHome } from "react-icons/bi";
import {BsArrowRigh,BsArrowRightShort} from 'react-icons/bs'
import ArticleSlider from "./ArticleSlider";

function Article() {
  return (
    <div className="bg-white  py-[65px] overflow-hidden ">
      <div className="w-10/12 mx-auto">
        <div className=" flex flex-col gap-3 justify-center !text-center ">
          <h2 className="text-4xl font-bold">Latest News & Artical</h2>
          <span className="text-primary underline font-semibold">
            Browse our news & articles
          </span>
        </div>
        {/* <div className="flex flex-row justify-start pt-[50px] gap-4 w-11/12 mx-auto"> */}
        <ArticleSlider type="3">
           {/* Product1 */}
           <div className=" flex group group1 flex-col p-4 bg-white  gap-3  w-[400px] border rounded-xl relative overflow-hidden">
            <img className="h-[160px] w-full " src="/Images/news2.png"/>
            <div className="flex flex-col pt-2 gap-2  items-start  ">
              <h2 className="text-base font-bold">Significant all-round Speed</h2>
              <span className="text-[13px] italic text-[#181720b3] font-bold">Tuesday, 4/28/2022</span>
              <p className="text-[#181720] font-normal text-[15px]">
              A classic 'win-win' scenario, the result of vastly improved hydrodynamic efficiency of the all new "Revolution" 37' hull.
              </p>
              <div className="flex pt-2 flex-row gap-1 items-center ">
                <span className="text-primary underline text-sm font-medium">Read More</span>
                <BsArrowRightShort className="text-primary   font-bold" fontSize="20px"/>

              </div>
            </div>
          </div>
          {/* Product2 */}
          <div className=" flex group group1 flex-col p-4 bg-white  gap-3  w-[400px] border rounded-xl relative overflow-hidden">
            <img className="h-[160px] w-full " src="/Images/news3.png"/>
            <div className="flex flex-col pt-2 gap-2  items-start  ">
              <h2 className="text-base font-bold">Significant all-round Speed</h2>
              <span className="text-[13px] italic text-[#181720b3] font-bold">Tuesday, 4/28/2022</span>
              <p className="text-[#181720] font-normal text-[15px]">
              A classic 'win-win' scenario, the result of vastly improved hydrodynamic efficiency of the all new "Revolution" 37' hull.
              </p>
              <div className="flex pt-2 flex-row gap-1 items-center ">
                <span className="text-primary underline text-sm font-medium">Read More</span>
                <BsArrowRightShort className="text-primary   font-bold" fontSize="20px"/>

              </div>
            </div>
          </div>
          {/* Product 3 */}
           <div className=" flex group group1 flex-col p-4 bg-white  gap-3  w-[400px] border rounded-xl relative overflow-hidden">
            <img className="h-[160px] w-full " src="/Images/news2.png"/>
            <div className="flex flex-col pt-2 gap-2  items-start  ">
              <h2 className="text-base font-bold">Significant all-round Speed</h2>
              <span className="text-[13px] italic text-[#181720b3] font-bold">Tuesday, 4/28/2022</span>
              <p className="text-[#181720] font-normal text-[15px]">
              A classic 'win-win' scenario, the result of vastly improved hydrodynamic efficiency of the all new "Revolution" 37' hull.
              </p>
              <div className="flex pt-2 flex-row gap-1 items-center ">
                <span className="text-primary underline text-sm font-medium">Read More</span>
                <BsArrowRightShort className="text-primary   font-bold" fontSize="20px"/>

              </div>
            </div>
          </div>
             {/* Product4 */}
             <div className=" flex group group1 flex-col p-4 bg-white  gap-3  w-[400px] border rounded-xl relative overflow-hidden">
            <img className="h-[160px] w-full " src="/Images/news3.png"/>
            <div className="flex flex-col pt-2 gap-2  items-start  ">
              <h2 className="text-base font-bold">Significant all-round Speed</h2>
              <span className="text-[13px] italic text-[#181720b3] font-bold">Tuesday, 4/28/2022</span>
              <p className="text-[#181720] font-normal text-[15px]">
              A classic 'win-win' scenario, the result of vastly improved hydrodynamic efficiency of the all new "Revolution" 37' hull.
              </p>
              <div className="flex pt-2 flex-row gap-1 items-center ">
                <span className="text-primary underline text-sm font-medium">Read More</span>
                <BsArrowRightShort className="text-primary   font-bold" fontSize="20px"/>

              </div>
            </div>
          </div>

        </ArticleSlider>
                     {/* Product4 */}

        {/* </div> */}
        <div className="mt-[80px] mmd:mt-[140px] gap-3 items-center md:items-start grid-rows-6 grid md:grid-rows-3  md:gap-6 lg:gap-10 lg:grid-rows-2 grid-flow-col border px-5 py-3 rounded-xl">
            <div className="flex flex-col  gap-3 ">
                <h2 className="text-md font-bold ">Fast Marine Boats Store</h2>
                <p className="text-sm font-semibold text-[#18172066]">Al Bateen Plaza C1 Tower Ground Floor<br/> P.O.Box 39227, Abu Dhabi, UAE </p>
            </div>
            <div className="flex flex-col  gap-3 ">
                <h2 className="text-md font-bold ">Phone & Email Support Hours</h2>
                <p className="text-sm font-semibold text-[#18172066]">8am-6pm Mon - Sat<br/>10am-4pm Sun </p>
            </div>
            <div className="flex flex-col  gap-3 ">
                <h2 className="text-md font-bold ">Retail Store Hours</h2>
                <p className="text-sm font-semibold text-[#18172066]">9am-6pm ET Mon - Sat<br/> 10am-4pm ET Sun </p>
            </div>
            <div className="flex flex-col   gap-3  ">
                <h2 className="text-md font-bold ">DIRECT INT'L</h2>
                <p className="text-sm font-semibold text-primary">+971 2 555 5917<br/> sales@fastmarineboats.com </p>
            </div>
            <div className="flex flex-col  gap-3  ">
                <h2 className="text-md font-bold ">Toll Free UAE</h2>
                <p className="text-sm font-semibold text-primary">+971 2 555 5917 </p>
            </div>
            <div className="flex flex-col  gap-3  ">
                <h2 className="text-md font-bold ">Covid19</h2>
                <p className="text-sm font-semibold text-primary">Our response to COVID-19. </p>
            </div>
            

        </div>
      </div>
    </div>
  );
}

export default Article;

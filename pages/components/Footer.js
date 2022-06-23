import React from "react";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineWifi,
} from "react-icons/ai";
import { BsFacebook, BsMessenger, BsPinterest } from "react-icons/bs";
function Footer() {
  return (
    <>
    <div>
    <div className="w-11/12 mx-auto">
        <div className="my-[80px] mmd:my-[60px] gap-3 items-center md:items-start grid-rows-6 grid md:grid-rows-3  md:gap-6 lg:gap-10 lg:grid-rows-2 grid-flow-col border px-5 py-3 rounded-xl">
          <div className="flex flex-col  gap-3 ">
            <h2 className="text-md font-bold ">Fast Marine Boats Store</h2>
            <p className="text-sm font-semibold text-[#18172066]">
              Al Bateen Plaza C1 Tower Ground Floor
              <br /> P.O.Box 39227, Abu Dhabi, UAE{" "}
            </p>
          </div>
          <div className="flex flex-col  gap-3 ">
            <h2 className="text-md font-bold ">Phone & Email Support Hours</h2>
            <p className="text-sm font-semibold text-[#18172066]">
              8am-6pm Mon - Sat
              <br />
              10am-4pm Sun{" "}
            </p>
          </div>
          <div className="flex flex-col  gap-3 ">
            <h2 className="text-md font-bold ">Retail Store Hours</h2>
            <p className="text-sm font-semibold text-[#18172066]">
              9am-6pm ET Mon - Sat
              <br /> 10am-4pm ET Sun{" "}
            </p>
          </div>
          <div className="flex flex-col   gap-3  ">
            <h2 className="text-md font-bold ">DIRECT INT'L</h2>
            <p className="text-sm font-semibold text-primary">
              +971 2 555 5917
              <br /> sales@fastmarineboats.com{" "}
            </p>
          </div>
          <div className="flex flex-col  gap-3  ">
            <h2 className="text-md font-bold ">Toll Free UAE</h2>
            <p className="text-sm font-semibold text-primary">
              +971 2 555 5917{" "}
            </p>
          </div>
          <div className="flex flex-col  gap-3  ">
            <h2 className="text-md font-bold ">Covid19</h2>
            <p className="text-sm font-semibold text-primary">
              Our response to COVID-19.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-light w-full overflow-hidden">

      <div className="flex flex-row flex-wrap w-[95%] gap-2.5 md:w-11/12 mmd:w-10/12 md:gap-5 lg:gap-0 mx-auto py-[50px]">
        <div className="flex flex-col gap-3 w-[48%] lg:w-1/3">
          <h2 className="text-lg font-bold pb-[10px]">Menu</h2>
          <a className="text-sm text-dark1">Home</a>
          <a className="text-sm text-dark1">Brands</a>
          <a className="text-sm text-dark1">Marine</a>
          <a className="text-sm text-dark1">Fishing</a>
          <a className="text-sm text-dark1">Home</a>
          <a className="text-sm text-dark1">Diving & Spearfishing</a>
          <a className="text-sm text-dark1">Apparel</a>
          <a className="text-sm text-dark1">Water sports</a>
        </div>
        <div className="flex flex-col gap-3 w-[48%]  lg:w-1/3">
          <h2 className="text-lg font-bold pb-[10px]">WHO WE ARE</h2>
          <a className="text-sm text-dark1">About us</a>
          <a className="text-sm text-dark1">Our gallery</a>
          <a className="text-sm text-dark1">Our services</a>
          <a className="text-sm text-dark1">Contact us</a>
        </div>
        <div className="flex flex-col w-full  items-center md:items-start md:w-1/2 lg:w-1/3 gap-3">
          <h2 className="text-lg font-bold ">SOCIAL MEDIA</h2>
          <p className="text-sm text-[#18172066] font-semibold">
            Follow Fast Marine Boats for exclusive <br /> giveaways featuring
            top brands.
          </p>
          <div className="grid grid-rows-3 grid-flow-col w-full mmd:w-2/3 gap-3">
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <AiFillYoutube className="text-4xl text-[#f12222]" />
            </div>
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <AiOutlineTwitter className="text-4xl text-[#009ff9]" />
            </div>
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <AiOutlineInstagram className="text-4xl text-[#f91d01]" />
            </div>
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <BsFacebook className="text-4xl text-[#2573e9]" />
            </div>
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <AiFillLinkedin className="text-4xl text-[#0a63a4]" />
            </div>
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <AiOutlineWifi
                className="text-4xl text-[#464aab] "
                fontWeight="900"
              />
            </div>
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <BsMessenger className="text-4xl text-[#025adf]" />
            </div>
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <BsPinterest className="text-4xl text-[#b10000]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#eee] w-full py-4 overflow-hidden">
        <div className="w-11/12 mx-auto flex lg:flex-row flex-col gap-4 justify-between items-center ">
          <div className="flex flex-row gap-2">
            <span className="text-xs text-primary underline">
              Terms & Conditions{" "}
            </span>
            <span className="text-xs text-primary underline">
              Privacy Notes
            </span>
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            <img src="/Images/payment-methods/1.png" className="h-[30px]" />
            <img src="/Images/payment-methods/2.png" className="h-[30px]" />
            <img src="/Images/payment-methods/3.png" className="h-[30px]" />
            <img src="/Images/payment-methods/4.png" className="h-[30px]" />
            <img src="/Images/payment-methods/5.png" className="h-[30px]" />
            <img src="/Images/payment-methods/6.png" className="h-[30px]" />
            <img src="/Images/payment-methods/7.png" className="h-[30px]" />
            <img src="/Images/payment-methods/8.png" className="h-[30px]" />
            <img src="/Images/payment-methods/9.png" className="h-[30px]" />
          </div>
          <div className="  text-xs md:w-full text-center lg:w-[180px] font-bold">
            © 2022, Fastmarine, Web Design By{" "}
            <a className="text-primary underline">Digital Graphiks</a>.
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Footer;

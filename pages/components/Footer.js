import React from "react";
import {AiFillYoutube,AiOutlineTwitter,AiOutlineInstagram,AiFillLinkedin,AiOutlineWifi} from 'react-icons/ai';
import {BsFacebook,BsMessenger,BsPinterest} from 'react-icons/bs';
function Footer() {
  return (
    <div className="bg-light w-full">
      <div className="flex flex-row w-10/12 mx-auto py-[50px]">
        <div className="flex flex-col gap-3 w-1/3">
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
        <div className="flex flex-col gap-3 w-1/3">
          <h2 className="text-lg font-bold pb-[10px]">WHO WE ARE</h2>
          <a className="text-sm text-dark1">About us</a>
          <a className="text-sm text-dark1">Our gallery</a>
          <a className="text-sm text-dark1">Our services</a>
          <a className="text-sm text-dark1">Contact us</a>
        </div>
        <div className="flex flex-col w-1/3 gap-3">
          <h2 className="text-lg font-bold ">SOCIAL MEDIA</h2>
          <p className="text-sm text-[#18172066] font-semibold">
            Follow Fast Marine Boats for exclusive <br/> giveaways featuring top
            brands.
          </p>
          <div className="grid grid-rows-3 grid-flow-col w-2/3 gap-3">
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <AiFillYoutube className="text-4xl text-[#f12222]"/>

            </div>
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <AiOutlineTwitter className="text-4xl text-[#009ff9]"/>

            </div><div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <AiOutlineInstagram className="text-4xl text-[#f91d01]"/>

            </div>
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <BsFacebook className="text-4xl text-[#2573e9]"/>

            </div><div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <AiFillLinkedin className="text-4xl text-[#0a63a4]"/>

            </div><div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <AiOutlineWifi className="text-4xl text-[#464aab] " fontWeight="900"/>

            </div>
            <div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <BsMessenger className="text-4xl text-[#025adf]"/>

            </div><div className="flex justify-center w-full h-[60px] items-center rounded-xl border">
              <BsPinterest className="text-4xl text-[#b10000]"/>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#eee] w-full py-4">
        <div className="w-10/12 mx-auto flex flex-row justify-between items-center ">
          <div className="flex flex-row gap-2">
            <span className="text-xs text-primary underline">Terms & Conditions </span>
            <span className="text-xs text-primary underline">Privacy Notes</span>

          </div>
          <div className="flex flex-row gap-2">
           <img src="/Images/payment-methods/1.png" className="h-[30px]"/>
           <img src="/Images/payment-methods/2.png" className="h-[30px]"/>
           <img src="/Images/payment-methods/3.png" className="h-[30px]"/>
           <img src="/Images/payment-methods/4.png" className="h-[30px]"/>
           <img src="/Images/payment-methods/5.png" className="h-[30px]"/>
           <img src="/Images/payment-methods/6.png" className="h-[30px]"/>
           <img src="/Images/payment-methods/7.png" className="h-[30px]"/>
           <img src="/Images/payment-methods/8.png" className="h-[30px]"/>
           <img src="/Images/payment-methods/9.png" className="h-[30px]"/>
          </div>
          <div className='  text-xs w-[180px] font-bold'>
          © 2022, Fastmarine, Web Design By <a className="text-primary underline">Digital Graphiks</a>.
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;

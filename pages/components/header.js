import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { BiShoppingBag, BiSearchAlt2, BiHome, BiX } from "react-icons/bi";
import {
  AiFillCaretDown,
  AiOutlineMenu,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Slider from "./slider";

function header() {
  const cartItem=[
    {
      id:'1',
      des:"Honu dive suit",
      img1:'/Images/product11.png',
      Price:350.00,
      qty:1,
    },
    {
      id:'2',
      des:"Coleman item",
      img1:'/Images/product22.png',
      Price:290.00,
      qty:1,
    }
  ]
  const [toggler, setToggler] = useState(false);
  const [brand, setBrand] = useState(false);
  const [cart, setCart] = useState(false);
  const [fishing, setFishing] = useState(false);
  const [fish, setFish] = useState(false);
  const [fish1, setFish1] = useState(false);
  const [fish2, setFish2] = useState(false);
  const [fish3, setFish3] = useState(false);
  const [fish4, setFish4] = useState(false);
  const [fish5, setFish5] = useState(false);
  const [cartItems,setCartItems]=useState(cartItem);
  const [price,setPrice]=useState();
  // useEffect(()=>{
  //   let total=0;
  //   total=
  // })
  const CartIncrement=(item)=>{
    // let Product=cartItems.find((x)=>x.id===item.id);
    // let arr;

    //   arr=cartItems.map((items)=>{
    //     item.id===items.id?{...items,qty:2} :items
    //   })
      // setCartItems(arr)
    
    
    // console.log("Product",arr);
  }

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="relative w-11/12 md:w-10/12 gap-3 md:gap-0 flex flex-col justify-center md:flex-row text-xs mx-auto py-3 ">
        <p className="flex items-center justify-center w-full font-bold">
          *Free Economy Shipping
        </p>
        <div className="flex flex-row whitespace-nowrap md:items-end gap-2 items-center justify-center md:justify-end w-full md:w-1/3 font-medium ">
          <Link href="/">
            <a className="px-4">Login</a>
          </Link>
          <div className="border px-4 border-x-2 border-y-0">
            <Link href="/">
              <a>Sign up</a>
            </Link>
          </div>
          <div className="flex px-4">
            <img src="" />
            <p>English</p>
          </div>
        </div>
      </div>
      {cart && (
        <div
          className={` menu fixed z-40 overflow-scroll  invisible opacity-0  -translate-x-[10px] top-0  right-0 bg-white min-w-[300px] md:w-[350px] shadow-md h-screen ${
            cart && "!translate-x-0 !visible !opacity-100"
          }`}
          style={{ transition: "all 0.5s ease 0.2s", overflow: "auto " }}
        >
          <div className="flex flex-col">
            <div className="w-11/12 mx-auto flex py-3 items-center justify-between">
              <h2>Cart</h2>
              <BiX
                onClick={() => setCart(false)}
                className="w-[30px] h-[30px] rounded-sm border-[#f12222] border text-center  cursor-pointer  text-md  text-[#f12222] "
              />
            </div>
            <hr />
            <div className="flex flex-col h-[80vh] overflow:auto w-11/12 mx-auto">
              {/* cart item1 */}
              {
                cartItems.length>0 &&
                cartItems.map((items,index)=>(
                  <div key={index} className="flex justify-between py-3 ">
                  <div className="h-[100px] flex items-center w-1/4">
                    <img src={items && items.img1} className="w-full " />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <h2 className="text-[16px] text-dark1">{items && items.des}</h2>
                    <p className="text-[16px] font-bold text-darker">${items && items.Price}</p>
                    <div className="flex text-[18px] border-2 w-[100px] justify-around items-center py-1 font-bold text-dark ">
                      <AiOutlineMinus />
                      <span>{items && items.qty}</span>
                      <AiOutlinePlus onClick={()=>CartIncrement(items)} />
                    </div>
                  </div>
                  <BiX className="w-[30px] h-[30px] rounded-sm text-center  cursor-pointer  text-md  text-[#f12222] " />
                  <hr/>
                </div>
                ))
              }
          
              {/* break */}
              {/* <hr /> */}
              {/* cart item2 */}
              {/* <div className="flex justify-between py-3 ">
                <div className="h-[100px] flex items-center w-1/4">
                  <img src="/Images/product11.png" className="w-full " />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <h2 className="text-[16px] text-dark1">Honu dive suit</h2>
                  <p className="text-[16px] font-bold text-darker">$350.00</p>
                  <div className="flex text-[18px] border-2 w-[100px] justify-around items-center py-1 font-bold text-dark ">
                    <AiOutlineMinus />
                    <span>4</span>
                    <AiOutlinePlus />
                  </div>
                </div> */}
                {/* <BiX className="w-[30px] h-[30px] rounded-sm text-center  cursor-pointer  text-md  text-[#f12222] " />
              </div> */}
              {/* cart */}
            </div>
            <hr />
            {/* Checkout */}
            <div className="flex gap-4 p-3 h-fit">
              <div className="w-1/2 rounded-sm text-center text-white bg-primary py-2 font-bold text-[14px] px-3">View Cart</div>
              <div className="w-1/2 rounded-sm text-center text-darker  border py-2 font-bold text-[14px] px-3">Checkout</div>
            </div>
          </div>
        </div>
      )}
      {toggler && (
        <div
          className={` menu fixed z-30 overflow-scroll  invisible opacity-0  -translate-x-[10px] top-0 left-0 bg-white w-full mmd:w-1/2 shadow-md h-full ${
            toggler && "!translate-x-0 !visible !opacity-100"
          }`}
          style={{ transition: "all 0.5s ease 0.2s", overflow: "auto " }}
        >
          <div className="flex flex-col">
            <div className="w-11/12 mx-auto flex py-3 items-center justify-between">
              <h2>Category</h2>
              <div
                onClick={() => setToggler(false)}
                className="w-[80px] text-center py-[7px] cursor-pointer font-semibold text-sm  text-darker hover:bg-[#f12222] hover:text-white"
              >
                X
              </div>
            </div>
            <hr />
            <ul className="w-full text-md font-semibold whitespace-nowrap gap-2  flex flex-col py-2  mx-auto">
              <li className="py-2 px-5 hover:bg-primary rounded-sm mx-2  hover:text-white cursor-pointer">
                <BiHome fontSize="16px " />
              </li>
              <div
                onClick={() => setBrand(!brand)}
                className=" hover:bg-primary rounded-sm  mx-2 hover:text-white cursor-pointer"
              >
                <li className="flex  py-1.5 px-5  items-center gap-2  ">
                  <p>Brands</p>
                  <AiFillCaretDown fontSize="12px" />
                </li>
              </div>
              {brand && (
                <div className="  mt-1.5 overflow-y-auto h-[380px]  z-10 px-3 py-[20px] w-full bg-white md:w-10/12 mmd:w-full mx-auto inset-x-0 ">
                  <div className="grid grid-cols-2 md:grid-cols-3 mmd:grid-cols-2 grid-flow-row gap-4  ">
                    <img
                      className="h-[80px] mb-2 w-full"
                      src="/Images/brands/1.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/7.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/2.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/4.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/5.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/6.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/8.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/3.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/9.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/10.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/11.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/12.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/13.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/14.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/15.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/16.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/17.png"
                    />
                    <img
                      className="h-[80px] my-2 w-full"
                      src="/Images/brands/18.png"
                    />
                  </div>
                </div>
              )}

              <li className="hover:bg-primary rounded-sm mx-2 hover:text-white cursor-pointer flex py-1.5 px-5 items-center gap-2 ">
                <p>Marine</p>
                <AiFillCaretDown fontSize="12px" />
              </li>
              <div className="">
                <li
                  onClick={() => setFishing(!fishing)}
                  className="hover:bg-primary  hover:rounded-sm mx-2  hover:text-white cursor-pointer flex py-1.5 px-5  items-center gap-2 "
                >
                  <p>Fishing</p>
                  <AiFillCaretDown fontSize="12px" />
                </li>
              </div>
              {fishing && (
                <div className=" block    mt-1.5  px-4 py-[5px] bg-white  ">
                  <div className="flex flex-col  gap-4">
                    {/* text1 */}
                    <div className="flex flex-col px-5 gap-3 w-full ">
                      <div
                        className="flex justify-between w-full cursor-pointer"
                        onClick={() => setFish(!fish)}
                      >
                        <h2 className="text-darker font-bold text-sm">
                          King Fish Special
                        </h2>
                        <AiFillCaretDown fontSize="12px " className="mx-5" />
                      </div>
                      {fish && (
                        <div className="px-3 flex flex-col gap-3">
                          <a className="text-[13px] text-darker">
                            Trolling Sets for Kingfish
                          </a>
                          <a className="text-[13px]  text-darker">
                            Lures for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Wire Line Leader
                          </a>
                          <a className="text-[13px] text-darker">
                            Rigs for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Fluoro Leaders for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Accessories for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Casting Sets for Kingfish
                          </a>
                        </div>
                      )}
                    </div>
                    {/* text2 */}
                    <div className="flex flex-col px-5 gap-3 w-full ">
                      <div
                        className="flex justify-between w-full cursor-pointer"
                        onClick={() => setFish1(!fish1)}
                      >
                        <h2 className="text-darker font-bold text-sm">
                          King Reels
                        </h2>
                        <AiFillCaretDown fontSize="12px " className="mx-5" />
                      </div>
                      {fish1 && (
                        <div className="px-3 flex flex-col gap-3">
                          <a className="text-[13px] text-darker">
                            Trolling Sets for Kingfish
                          </a>
                          <a className="text-[13px]  text-darker">
                            Lures for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Wire Line Leader
                          </a>
                          <a className="text-[13px] text-darker">
                            Rigs for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Fluoro Leaders for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Accessories for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Casting Sets for Kingfish
                          </a>
                        </div>
                      )}
                    </div>
                    {/* text-3 */}
                    <div className="flex flex-col px-5 gap-3 w-full ">
                      <div
                        className="flex justify-between w-full cursor-pointer"
                        onClick={() => setFish2(!fish2)}
                      >
                        <h2 className="text-darker font-bold text-sm">
                          King Rods
                        </h2>
                        <AiFillCaretDown fontSize="12px " className="mx-5" />
                      </div>
                      {fish2 && (
                        <div className="px-3 flex flex-col gap-3">
                          <a className="text-[13px] text-darker">
                            Trolling Sets for Kingfish
                          </a>
                          <a className="text-[13px]  text-darker">
                            Lures for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Wire Line Leader
                          </a>
                          <a className="text-[13px] text-darker">
                            Rigs for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Fluoro Leaders for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Accessories for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Casting Sets for Kingfish
                          </a>
                        </div>
                      )}
                    </div>
                    {/* text-4 */}
                    <div className="flex flex-col px-5 gap-3 w-full ">
                      <div
                        className="flex justify-between w-full cursor-pointer"
                        onClick={() => setFish3(!fish3)}
                      >
                        <h2 className="text-darker font-bold text-sm">
                          Combos
                        </h2>
                        <AiFillCaretDown fontSize="12px " className="mx-5" />
                      </div>
                      {fish3 && (
                        <div className="px-3 flex flex-col gap-3">
                          <a className="text-[13px] text-darker">
                            Trolling Sets for Kingfish
                          </a>
                          <a className="text-[13px]  text-darker">
                            Lures for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Wire Line Leader
                          </a>
                          <a className="text-[13px] text-darker">
                            Rigs for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Fluoro Leaders for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Accessories for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Casting Sets for Kingfish
                          </a>
                        </div>
                      )}
                    </div>
                    {/* text-5 */}
                    <div className="flex flex-col px-5 gap-3 w-full ">
                      <div
                        className="flex justify-between w-full cursor-pointer"
                        onClick={() => setFish4(!fish4)}
                      >
                        <h2 className="text-darker font-bold text-sm">
                          Fishing Lines
                        </h2>
                        <AiFillCaretDown fontSize="12px " className="mx-5" />
                      </div>
                      {fish4 && (
                        <div className="px-3 flex flex-col gap-3">
                          <a className="text-[13px] text-darker">
                            Trolling Sets for Kingfish
                          </a>
                          <a className="text-[13px]  text-darker">
                            Lures for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Wire Line Leader
                          </a>
                          <a className="text-[13px] text-darker">
                            Rigs for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Fluoro Leaders for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Accessories for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Casting Sets for Kingfish
                          </a>
                        </div>
                      )}
                    </div>
                    {/* text-6 */}
                    <div className="flex flex-col px-5 gap-3 w-full ">
                      <div
                        className="flex justify-between w-full cursor-pointer"
                        onClick={() => setFish5(!fish5)}
                      >
                        <h2 className="text-darker font-bold text-sm">
                          Fishing Lures
                        </h2>
                        <AiFillCaretDown fontSize="12px " className="mx-5" />
                      </div>
                      {fish5 && (
                        <div className="px-3 flex flex-col gap-3">
                          <a className="text-[13px] text-darker">
                            Trolling Sets for Kingfish
                          </a>
                          <a className="text-[13px]  text-darker">
                            Lures for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Wire Line Leader
                          </a>
                          <a className="text-[13px] text-darker">
                            Rigs for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Fluoro Leaders for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Accessories for Kingfish
                          </a>
                          <a className="text-[13px] text-darker">
                            Casting Sets for Kingfish
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <li className="hover:bg-primary hover:rounded-sm mx-2  hover:text-white cursor-pointer flex py-1.5 px-5 items-center gap-2 whitespace-nowrap ">
                <p>Diving & Spearfishing</p>
                <AiFillCaretDown fontSize="12px" />
              </li>
              <li className="hover:bg-primary  hover:rounded-sm mx-2  hover:text-white cursor-pointer flex py-1.5 px-5 items-center gap-2 ">
                <p>Apparel</p>
                <AiFillCaretDown fontSize="12px" />
              </li>
              <li className="hover:bg-primary  hover:rounded-sm mx-2  hover:text-white cursor-pointer flex py-1.5 px-5 items-center gap-2 ">
                <p>Water sports</p>
                <AiFillCaretDown fontSize="12px" />
              </li>
              <li className="hover:bg-primary  hover:rounded-sm mx-2  hover:text-white cursor-pointer flex py-1.5 px-5 items-center  gap-2 ">
                <p>Camping</p>
                <AiFillCaretDown fontSize="12px" />
              </li>
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div className="hidden lg:block">
        <div className="w-10/12 flex mx-auto justify-between py-3 items-center">
          <img src="/Images/logo-dark.svg" className="w-[185px] h-[50px]" />
          <div className="flex gap-5">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search...."
                className="bg-[#f3f3f3] outline-none border-none py-2 indent-3 rounded-md w-[250px]"
              />
              <BiSearchAlt2
                fontSize="medium"
                className="absolute right-3 text-primary"
              />
            </div>
            <div className="flex w-[180px] rounded-md text-xs gap-2 items-center justify-center border font-bold border-1">
              <FaMobileAlt fontSize="small" />
              <p>+971 2 555 5917</p>
            </div>
            <div
              onClick={() => setCart(true)}
              className="flex w-[150px] cursor-pointer gap-2 text-sm font-semibold bg-primary shadow-md shadow-primary text-white rounded-md items-center justify-center"
            >
              <BiShoppingBag fontSize="small" />
              <p>Add to cart</p>
            </div>
          </div>
        </div>
        <hr />
        <ul className="w-10/12 text-md font-semibold whitespace-nowrap justify-around flex py-2 items-center mx-auto">
          <li className="p-2 hover:bg-primary rounded-md  hover:text-white cursor-pointer">
            <BiHome fontSize="16px " />
          </li>
          <div className="group hover:bg-primary rounded-md  hover:text-white cursor-pointer">
            <li className="flex relative py-1.5 px-5 border hover:border-0  border-y-0 items-center gap-2  ">
              <p>Brands</p>
              <AiFillCaretDown fontSize="12px" />
            </li>
            <div className="absolute group-hover:block hidden mt-1.5  z-10 px-10 rounded-b-[20px] py-[60px] bg-white w-10/12 mx-auto border-x-0 border-b-0 border-t-2 inset-x-0 ">
              <div className="columns-6 gap-4  ">
               
               <img 
                  className="h-[80px] mb-2 w-10/12"
                  src="/Images/brands/1.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/7.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/2.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/4.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/5.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/6.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/8.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/3.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/9.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/10.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/11.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/12.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/13.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/14.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/15.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/16.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/17.png"
                />
                <img
                  className="h-[80px] my-2 w-10/12"
                  src="/Images/brands/18.png"
                />
              </div>
            </div>
          </div>

          <li className="hover:bg-primary rounded-md  hover:text-white cursor-pointer flex py-1.5 px-5 items-center gap-2 ">
            <p>Marine</p>
            <AiFillCaretDown fontSize="12px" />
          </li>
          <div className="group">
            <li className="hover:bg-primary  hover:rounded-md  hover:text-white cursor-pointer flex py-1.5 px-5 border  border-y-0 items-center gap-2 ">
              <p>Fishing</p>
              <AiFillCaretDown fontSize="12px" />
            </li>
            <div className="absolute group-hover:block hidden shadow-lg  mt-1.5  z-10 pl-15  px-10 rounded-b-[20px] py-[30px] bg-white w-10/12 mx-auto border-x-0 border-b-0 border-t-2 inset-x-0 ">
              <div className="flex flex-row flex-wrap  gap-10">
                {/* text1 */}
                <div className="flex flex-col pl-5 gap-3 w-[22%] ">
                  <h2 className="text-darker font-bold text-sm">
                    King Fish Special
                  </h2>
                  <a className="text-[13px] text-darker">
                    Trolling Sets for Kingfish
                  </a>
                  <a className="text-[13px]  text-darker">Lures for Kingfish</a>
                  <a className="text-[13px] text-darker">Wire Line Leader</a>
                  <a className="text-[13px] text-darker">Rigs for Kingfish</a>
                  <a className="text-[13px] text-darker">
                    Fluoro Leaders for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Accessories for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Casting Sets for Kingfish
                  </a>
                </div>
                {/* text2 */}
                <div className="flex pl-5 flex-col gap-3 w-[22%]">
                  <h2 className="text-darker font-bold text-sm">
                    King Fish Special
                  </h2>
                  <a className="text-[13px] text-darker">
                    Trolling Sets for Kingfish
                  </a>
                  <a className="text-[13px]  text-darker">Lures for Kingfish</a>
                  <a className="text-[13px] text-darker">Wire Line Leader</a>
                  <a className="text-[13px] text-darker">Rigs for Kingfish</a>
                  <a className="text-[13px] text-darker">
                    Fluoro Leaders for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Accessories for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Casting Sets for Kingfish
                  </a>
                </div>
                {/* text-3 */}
                <div className="flex pl-5 flex-col gap-3 w-[22%] ">
                  <h2 className="text-darker font-bold text-sm">
                    King Fish Special
                  </h2>
                  <a className="text-[13px] text-darker">
                    Trolling Sets for Kingfish
                  </a>
                  <a className="text-[13px]  text-darker">Lures for Kingfish</a>
                  <a className="text-[13px] text-darker">Wire Line Leader</a>
                  <a className="text-[13px] text-darker">Rigs for Kingfish</a>
                  <a className="text-[13px] text-darker">
                    Fluoro Leaders for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Accessories for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Casting Sets for Kingfish
                  </a>
                </div>
                {/* text-4 */}
                <div className="flex pl-5 flex-col gap-3 w-[22%] ">
                  <h2 className="text-darker font-bold text-sm">
                    King Fish Special
                  </h2>
                  <a className="text-[13px] text-darker">
                    Trolling Sets for Kingfish
                  </a>
                  <a className="text-[13px]  text-darker">Lures for Kingfish</a>
                  <a className="text-[13px] text-darker">Wire Line Leader</a>
                  <a className="text-[13px] text-darker">Rigs for Kingfish</a>
                  <a className="text-[13px] text-darker">
                    Fluoro Leaders for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Accessories for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Casting Sets for Kingfish
                  </a>
                </div>
                {/* text-5 */}
                <div className="flex pl-5 flex-col gap-3 w-[22%] ">
                  <h2 className="text-darker font-bold text-sm">
                    King Fish Special
                  </h2>
                  <a className="text-[13px] text-darker">
                    Trolling Sets for Kingfish
                  </a>
                  <a className="text-[13px]  text-darker">Lures for Kingfish</a>
                  <a className="text-[13px] text-darker">Wire Line Leader</a>
                  <a className="text-[13px] text-darker">Rigs for Kingfish</a>
                  <a className="text-[13px] text-darker">
                    Fluoro Leaders for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Accessories for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Casting Sets for Kingfish
                  </a>
                </div>
                {/* text-6 */}
                <div className="flex pl-5 flex-col gap-3 w-[22%]">
                  <h2 className="text-darker font-bold text-sm">
                    King Fish Special
                  </h2>
                  <a className="text-[13px] text-darker">
                    Trolling Sets for Kingfish
                  </a>
                  <a className="text-[13px]  text-darker">Lures for Kingfish</a>
                  <a className="text-[13px] text-darker">Wire Line Leader</a>
                  <a className="text-[13px] text-darker">Rigs for Kingfish</a>
                  <a className="text-[13px] text-darker">
                    Fluoro Leaders for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Accessories for Kingfish
                  </a>
                  <a className="text-[13px] text-darker">
                    Casting Sets for Kingfish
                  </a>
                </div>
              </div>
            </div>
          </div>
          <li className="hover:bg-primary hover:rounded-md  hover:text-white cursor-pointer flex py-1.5 px-5 items-center gap-2 whitespace-nowrap ">
            <p>Diving & Spearfishing</p>
            <AiFillCaretDown fontSize="12px" />
          </li>
          <li className="hover:bg-primary  hover:rounded-md  hover:text-white cursor-pointer flex py-1.5 px-5 border  border-y-0 items-center gap-2 ">
            <p>Apparel</p>
            <AiFillCaretDown fontSize="12px" />
          </li>
          <li className="hover:bg-primary  hover:rounded-md  hover:text-white cursor-pointer flex py-1.5 px-5 items-center gap-2 ">
            <p>Water sports</p>
            <AiFillCaretDown fontSize="12px" />
          </li>
          <li className="hover:bg-primary  hover:rounded-md  hover:text-white cursor-pointer flex py-1.5 px-5 items-center border border-r-0 border-y-0 gap-2 ">
            <p>Camping</p>
            <AiFillCaretDown fontSize="12px" />
          </li>
        </ul>
      </div>
      {/* responsive menu */}
      <div className="w-11/12 md:w-10/12 flex lg:hidden mx-auto justify-between py-4 items-center">
        <img
          src="/Images/logo-dark.svg"
          className="w-[145px] md:w-[155px] h-[35px] md:h-[50px]"
        />
        <div className="flex gap-2">
          <div className=" flex justify-center items-center w-[55px] h-[45px] bg-[#f3f3f3] outline-none border-none py-2 rounded-md">
            <BiSearchAlt2 fontSize="22px" className=" text-primary" />
          </div>
          <div
            onClick={() => setCart(true)}
            className="relative flex justify-center cursor-pointer items-center w-[55px] h-[45px] bg-primary outline-none border-none py-2 rounded-md"
          >
            <BiShoppingBag fontSize="16px" className=" text-white" />
            <div className="absolute top-0.5 right-0.5 w-[18px] h-[18px] bg-red-500 flex justify-center items-center text-xs rounded-full text-white ">
              <span>3</span>
            </div>
          </div>
          <div
            onClick={() => setToggler(true)}
            className="flex justify-center items-center cursor-pointer "
          >
            <AiOutlineMenu fontSize="23px" />
          </div>
        </div>
      </div>

      {/* <Slider>
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
      </Slider> */}
    </div>
  );
}

export default header;

import React, { useState } from "react";
import ProductSlider from "../components/ProductSlider";
import { AiOutlineCheck, AiOutlineMinus, AiOutlinePlus,AiOutlineCheckCircle } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import Products1 from "../components/Products1";

function ProductInfo() {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [inform, setInform] = useState("product");
  return (
    <div className="w-full h-full overflow-hidden ">
      <hr />
      {/* <div className="w-10/12 h-[500px] py-6 mx-auto  hidden"> */}
      <div className="w-11/12 lg:w-10/12 lg:h-[500px] py-8  mmd:py-6 mx-auto  flex flex-col lg:flex-row">
        <ProductSlider />
        <div className="flex flex-col gap-2 pt-4 pl-2">
          <div className="text-sm text-primary font-bold">
            {" "}
            Home <span className="text-dark1">/ Product View</span>
          </div>
          <h2 className="whitespace-prewrap text-[24px] font-bold ">
            Bob Marlin Waterproof Duffle Bag Black 50 Liters
          </h2>
          <div className="text-sm text-dark1 uppercase">
            {" "}
            BY <span className=" text-primary ">KC COMPANY & LTD</span> .
          </div>
          {/* model */}
          <div className="flex flex-row items-center my-2 gap-5">
            <h2 className="uppercase font-bold text-[12px]">
              models <span className="text-[#FF0000]">*</span>
            </h2>
            <select className="w-[150px] px-3 py-2 border font-semibold rounded-sm">
              <option>3000-c</option>
              <option>2000-c</option>
            </select>
          </div>
          {/* color */}
          <div className="flex flex-row items-center my-2 gap-5">
            <h2 className="uppercase font-bold text-[12px]">
              brand color <span className="text-[#FF0000]">*</span>
            </h2>
            <div className="flex gap-3">
              {/* check1 */}
              <div
                onClick={() => setChecked(!checked)}
                className="relative block h-[30px] w-[30px] rounded-full bg-[#c06f20]"
              >
                <input
                  type="checkbox"
                  className="invisible opacity-0 w-full h-full"
                />
                <AiOutlineCheck
                  className={`absolute z-20 top-1/2 text-white left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none hidden ${
                    checked && "!block"
                  } `}
                />
              </div>
              {/* check2 */}
              <div
                onClick={() => setChecked1(!checked1)}
                className="relative block h-[30px] w-[30px] rounded-full bg-[#f7f399]"
              >
                <input
                  type="checkbox"
                  className="invisible opacity-0 w-full h-full"
                />
                <AiOutlineCheck
                  className={`absolute z-20 top-1/2 text-white left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none hidden ${
                    checked1 && "!block"
                  } `}
                />
              </div>
              {/* check3 */}
              <div
                onClick={() => setChecked2(!checked2)}
                className="relative block h-[30px] w-[30px] rounded-full bg-[#a3eda2]"
              >
                <input
                  type="checkbox"
                  className="invisible opacity-0 w-full h-full"
                />
                <AiOutlineCheck
                  className={`absolute z-20 top-1/2 text-white left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none hidden ${
                    checked2 && "!block"
                  } `}
                />
              </div>
              {/* check4 */}
              <div
                onClick={() => setChecked3(!checked3)}
                className="relative block h-[30px] w-[30px] rounded-full bg-[#aad5ed]"
              >
                <input
                  type="checkbox"
                  className="invisible opacity-0 w-full h-full"
                />
                <AiOutlineCheck
                  className={`absolute z-20 top-1/2 text-white left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none hidden ${
                    checked3 && "!block"
                  } `}
                />
              </div>
              {/* check5 */}
              <div
                onClick={() => setChecked4(!checked4)}
                className="relative block h-[30px] w-[30px] rounded-full bg-[#deafea]"
              >
                <input
                  type="checkbox"
                  className="invisible opacity-0 w-full h-full"
                />
                <AiOutlineCheck
                  className={`absolute z-20 top-1/2 text-white left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none hidden ${
                    checked4 && "!block"
                  } `}
                />
              </div>
              {/* check end */}
            </div>
          </div>
          {/* qty */}
          <div className="flex flex-row items-center my-2 gap-5">
            <h2 className="uppercase font-bold text-[12px]">
              qty <span className="text-[#FF0000]">*</span>
            </h2>
            <div className="flex text-[18px] border-2 w-[150px] justify-around items-center py-1 font-bold text-dark ">
              <AiOutlineMinus />
              <span>1</span>
              <AiOutlinePlus />
            </div>
          </div>
          {/* price & Cart */}
          <div className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-primary text-2xl font-bold">$ 350.00</p>
              <span className="text-[#18172066] font-bold text-[12px] italic">
                Inclusive of UAE VAT
              </span>
            </div>
            <div
              onClick={() => setCart(true)}
              className="flex w-[150px] cursor-pointer gap-2 text-sm font-semibold bg-primary shadow-sm shadow-primary text-white rounded-md items-center justify-center"
            >
              <BiShoppingBag fontSize="medium" />
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto flex gap-2 flex-col">
        <div className="flex flex-col ">
          <div className="flex flex-wrap  border border-t-0 border-x-0 ">
            <p
              onClick={() => setInform("product")}
              className={`hover:border text-sm ${
                inform === "product" &&
                "!border-b-[#fff] !border-b !font-bold border !text-primary -mb-[1px]"
              } text-darker px-5 py-3.5  border-b-0 rounded-t-xl  `}
            >
              Product Details
            </p>
            <p
              onClick={() => setInform("Specifications")}
              className={`text-sm ${
                inform === "Specifications" &&
                "!border-b-[#fff] !border-b border !font-bold !text-primary -mb-[1px]"
              } text-darker px-5 py-3.5  hover:border border-b-0 rounded-t-xl  `}
            >
              Specifications
            </p>
            <p
              onClick={() => setInform("Reviews")}
              className={`hover:border text-sm ${
                inform === "Reviews" &&
                "!border-b-[#fff] !border-b border !font-bold !text-primary -mb-[1px]"
              } text-darker px-5 py-3.5   border-b-0 rounded-t-xl  `}
            >
              Reviews
            </p>
            <p
              onClick={() => setInform("Shipping")}
              className={`hover:border text-sm ${
                inform === "Shipping" &&
                "!border-b-[#fff] !border-b border !font-bold !text-primary -mb-[1px]"
              } text-darker px-5 py-3.5   hover:border-b-0 border-b-0 rounded-t-xl  `}
            >
              Shipping & Returns
            </p>
          </div>
          {/* inform */}
          {
            inform==="product" &&
            <>
            <p className="pt-6 text-[#18172066] font-bold leading-7">
          Product Details The Bob Marlin Duffle Bag is made of a matte black PVC Tarpaulin with an IPX6 waterproof rating, so the bag is fully protected against powerful water jets! We have reinforced the shoulder strap and made it wider, so the bag is ready for heavy duty use! Being 50L it has loads of space for all your fishing tackle! The Duffle Bag comes with 2 side pockets & has a storage pocket on the inside too. Keep your gear dry and protected with the Bob Marlin Duffle Bag!
          </p>
          <div className="grid lg:grid-cols-2 gap-3 pt-6">
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">Waterproof IPX6</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">3 Storage Pockets</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">Waterproof Zippers</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">Reinforced Shoulder Strap</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">50 Litres</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">500D PVC Tarpaulin</p>
            </div>
            </div></>
          }
          {/* Specifications */}
          {
            inform==="Specifications" &&
            <>
            <p className="pt-6 text-[#18172066] font-bold leading-7">
            Specification The Bob Marlin Duffle Bag is made of a matte black PVC Tarpaulin with an IPX6 waterproof rating, so the bag is fully protected against powerful water jets! We have reinforced the shoulder strap and made it wider, so the bag is ready for heavy duty use! Being 50L it has loads of space for all your fishing tackle! The Duffle Bag comes with 2 side pockets & has a storage pocket on the inside too. Keep your gear dry and protected with the Bob Marlin Duffle Bag!

          </p>
          <div className="grid lg:grid-cols-2 gap-3 pt-6">
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">3 Storage Pockets</p>
            </div>
           
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">Waterproof Zippers</p>
            </div>

            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">500D PVC Tarpaulin</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">50 Litres</p>
            </div>
            </div></>
          }
          {/* Reviews */}
          {
            inform==="Reviews" &&
            <>
            <p className="pt-6 text-[#18172066] font-bold leading-7">
            Reviews The Bob Marlin Duffle Bag is made of a matte black PVC Tarpaulin with an IPX6 waterproof rating, so the bag is fully protected against powerful water jets! We have reinforced the shoulder strap and made it wider, so the bag is ready for heavy duty use! Being 50L it has loads of space for all your fishing tackle! The Duffle Bag comes with 2 side pockets & has a storage pocket on the inside too. Keep your gear dry and protected with the Bob Marlin Duffle Bag!
          </p>
          <div className="grid lg:grid-cols-2 gap-3 pt-6">
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">Waterproof IPX6</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">3 Storage Pockets</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">Waterproof Zippers</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">Reinforced Shoulder Strap</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">50 Litres</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">500D PVC Tarpaulin</p>
            </div>
            </div></>
          }
          {/* Shipping */}
          {
            inform==="Shipping" &&
            <>
            <p className="pt-6 text-[#18172066] font-bold leading-7">
            Shipping & Returns The Bob Marlin Duffle Bag is made of a matte black PVC Tarpaulin with an IPX6 waterproof rating, so the bag is fully protected against powerful water jets! We have reinforced the shoulder strap and made it wider, so the bag is ready for heavy duty use! Being 50L it has loads of space for all your fishing tackle! The Duffle Bag comes with 2 side pockets & has a storage pocket on the inside too. Keep your gear dry and protected with the Bob Marlin Duffle Bag!
          </p>
          <div className="grid lg:grid-cols-2 gap-3 pt-6">
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">Waterproof IPX6</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">3 Storage Pockets</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">Waterproof Zippers</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">Reinforced Shoulder Strap</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">50 Litres</p>
            </div>
            <div className="flex gap-3 items-center">
                <AiOutlineCheckCircle className="text-primary" fontSize="medium"/>
                <p className="text-[#18172066] font-bold leading-7">500D PVC Tarpaulin</p>
            </div>
            </div></>
          }
        </div>
      </div>
      <Products1/>
    </div>
  );
}

export default ProductInfo;

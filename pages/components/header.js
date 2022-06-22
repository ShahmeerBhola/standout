import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {FaMobileAlt }from 'react-icons/fa'
import {BiShoppingBag,BiSearchAlt2,BiHome} from 'react-icons/bi'
import {AiFillCaretDown} from 'react-icons/ai'
import Slider from './slider'

function header() {
  return (
    <div className='w-full h-full overflow-hidden'>
        <div className='w-10/12 flex flex-row text-xs mx-auto py-3 '>
            <p className='flex items-center justify-center w-full font-bold'>*Free Economy Shipping</p>
            <div className='flex flex-row items-end gap-2 justify-end w-1/3 font-medium '>
            <Link href="/">
          <a className='px-4'>Login</a>
        </Link>
                <div className='border px-4 border-x-2 border-y-0'>
                <Link href="/">
          <a>Sign up</a>
        </Link>
                </div>
                <div className='flex px-4'>
                    <img src=''/>
                    <p>English</p>
                </div>
            </div>
        </div>
        <hr/>
        <div className='w-10/12 flex mx-auto justify-between py-3 items-center'>
            <img src='/Images/logo-dark.svg' className='w-[185px] h-[50px]'/>
            <div className='flex gap-5'>
            <div className='relative flex items-center'>
            <input type='text' placeholder='Search....' className='bg-[#f3f3f3] outline-none border-none py-2 indent-3 rounded-md w-[250px]'/>
            <BiSearchAlt2 fontSize="medium" className="absolute right-3 text-primary"/>
            </div>
            <div className='flex w-[180px] rounded-md text-xs gap-2 items-center justify-center border font-bold border-1'>
                <FaMobileAlt fontSize="small"/>
                <p>+971 2 555 5917</p>
            </div>
            <div className='flex w-[150px] gap-2 text-sm font-semibold bg-primary shadow-md shadow-primary text-white rounded-md items-center justify-center'>
                <BiShoppingBag fontSize="small"/>
                <p>Add to cart</p>
            </div>
            </div>
        </div>
        <hr/>
        <ul className='w-10/12 text-md font-semibold justify-around flex py-2 items-center mx-auto'>
          <li className='px-2'>
          <BiHome fontSize="16px"/>
          </li>
          <li className='flex py-1.5 px-5 border  border-y-0 items-center gap-2 '>
            <p>Brands</p>
            <AiFillCaretDown fontSize="12px"/>
          </li>
          <li className='flex py-1.5 px-5 items-center gap-2 '>
            <p>Marine</p>
            <AiFillCaretDown fontSize="12px"/>
          </li>
          <li className='flex py-1.5 px-5 border  border-y-0 items-center gap-2 '>
            <p>Fishing</p>
            <AiFillCaretDown fontSize="12px"/>
          </li>
          <li className='flex py-1.5 px-5 items-center gap-2 whitespace-nowrap '>
            <p>Diving & Spearfishing</p>
            <AiFillCaretDown fontSize="12px"/>
          </li>
          <li className='flex py-1.5 px-5 border  border-y-0 items-center gap-2 '>
            <p>Apparel</p>
            <AiFillCaretDown fontSize="12px"/>
          </li>
          <li className='flex py-1.5 px-5 items-center gap-2 '>
            <p>Water sports</p>
            <AiFillCaretDown fontSize="12px"/>
          </li>
          <li className='flex py-1.5 px-5 items-center border border-r-0 border-y-0 gap-2 '>
            <p>Camping</p>
            <AiFillCaretDown fontSize="12px"/>
          </li>
        </ul>
        <Slider/>
    </div>
  )
}

export default header
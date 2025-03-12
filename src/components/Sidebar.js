import React from 'react'
import { Link } from 'react-router-dom'
import AddProduct from '../assets/addproduct.png'
import ListProduct from "../assets/productlist.png"

export default function Sidebar() {
  return (
    <div className='py-7 flex justify-center gap-x-2 pag-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6'>
        <Link to={"/addproduct"}>
            <button className='flexCenter gap-2 rounded-md bg-primary h-14 w-40 xs:w-44 medium-14 my-2 sm:medium-16 '>
                <img src={AddProduct} alt="" height={44} width={44} />
                <span>Add Product</span>
            </button>
        </Link>
        <Link to={"/listProduct"}>
            <button className='flexCenter gap-2 rounded-md bg-primary h-14 w-40 xs:w-44 medium-14 my-2 sm:medium-16 '>
                <img src={ListProduct} alt="" height={44} width={44} />
                <span>Product List</span>
            </button>
        </Link>
    </div>
  )
}

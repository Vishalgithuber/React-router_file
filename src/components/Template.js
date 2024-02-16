import React from 'react'
import signup from '../pages/Signup'
import frameImage from '../assets/frame.png';
import SignupForm from '../components/SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from "react-icons/fc"


const Template = ({title , desc1 , desc2 , Image , formtype , setIsLoggedIn}) => {
  return (
    <div className='flex flex-wrapk justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-12'>
        <div className='w-11/12 max-w-[450px] lg:order-1 order-2 '>
            <h1 className='text-richblack font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.675rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br />
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px] lg:order-1'>
            <img src={frameImage}  alt="Pattern"
            width={550}
            height={506}
            loading='style'
            />
            <img src={Image}  alt="Students"
            width={550}
            height={506}
            loading='style'
            className='absolute right-4 top-4'
            />
            
        </div>
    </div>
  )
}

export default Template

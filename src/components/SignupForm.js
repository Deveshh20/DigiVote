import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const SignupForm = ({setIsLoggedIn}) => {
    const[formData,setFormData]=useState({firstname:"",lastname:"",email:"",password:"",confirmPassword:""})
    const[showPassword1,setShowPassword1]=useState(false)
    const[showPassword2,setShowPassword2]=useState(false)
    const[accountType,setAccountType]=useState("student")
    const navigate=useNavigate();
    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("Password do not match ");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created")
        const accountData={
            ...formData
        }
        console.log(accountData);
        navigate("/dashboard");
    }
  return (
    <div>
        {/* Switch Button of Student and Instructor */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button onClick={()=>setAccountType("Voter")}
        className={`${accountType==="Voter"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
            Voter
        </button>
        <button onClick={()=>setAccountType("Poll Maker")}
        className={`${accountType==="Poll Maker"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
            Poll Maker
        </button>
        </div>
        <form onSubmit={submitHandler}>
        {/* Add Fisrt name and Last name */}
          <div className='flex gap-x-4 mt-4'>
          <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='firstname'
                value={formData.firstname}
                onChange={changeHandler}
                placeholder='Enter First Name'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>

            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='lastname'
                value={formData.lastname}
                onChange={changeHandler}
                placeholder='Enter last Name'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
          </div>
        {/* Add Email address  */}
        <div className='mt-4'>
        <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='email'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email Address'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
          </label>
        </div>
          
        {/* Add Create Password and Confrim Password */}
        <div className='flex gap-x-4 mt-4'>
           <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type={showPassword1?("text"):("password")}
                name='password'
                value={formData.password}
                onChange={changeHandler}
                placeholder='Create Password '
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                <span onClick={()=>setShowPassword1((prev)=>!prev)}
                className='absolute right-3 top-[38px] cursor-pointer'>
                {showPassword1?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
           </label>
           <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confrim Password<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type={showPassword2?("text"):("password")}
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={changeHandler}
                placeholder='Confirm Password '
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                <span onClick={()=>setShowPassword2((prev)=>!prev)}
                className='absolute right-3 top-[38px] cursor-pointer'>
                {showPassword2?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
           </label>
        </div>
        <button className='w-full bg-yellow-50 rounded-[8px] font-medium mt-6 text-richblack-900 px-[12px] py-[8px]'>
            Create Account
        </button>
        </form>
    </div>
  )
}

export default SignupForm
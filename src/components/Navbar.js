import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
    // Destructure props
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            {/* Logo */}
            <Link to="/">
                <img src={Logo} alt='logo' width={160} height={32} loading='lazy'/>
            </Link>

            {/* Navigation */}
            <nav>
                <ul className=' text-richblack-100 flex gap-x-6 richblack-100' >
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/' >About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login - Signup - Logout -- Dashboard */}
            <div className='flex item-center gap-x-4 '>
                {/* Show login button if user is not logged in */}
                {!isLoggedIn &&
                    <Link to="/login" >
                        <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                            Login
                        </button>
                    </Link>
                }
                {/* Show signup button if user is not logged in */}
                {!isLoggedIn &&
                    <Link to="/signup" >
                        <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                            Sign up
                        </button>
                    </Link>
                }
                {/* Show logout button if user is logged in */}
                {isLoggedIn &&
                    <Link to="/">
                        <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'                            onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged out successfully");
                            }}
                        >
                            Log out
                        </button>
                    </Link>
                }
                {/* Show dashboard button if user is logged in */}
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;

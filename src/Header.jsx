import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
    return (
        <header className="bg-yellow-300 py-3 px-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <img
                    src='src/assets/images/image1.png'
                    alt="Noon Logo"
                    className="h-8 w-auto cursor-pointer"
                    onClick={()=>{navigate('/')}}
                />
                <span className="text-lg font-bold"></span>
                <select className="flex justify-between items-center bg-transparent">
                    <option value="dubai">Dubai</option>
                    <option value="abu-dhabi">Abu Dhabi</option>
                    <option value="sharjah">Sharjah</option>
                </select>
            </div>
            <div className="flex-1 mx-4">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none rounded-lg"
                />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer ">
                <span>English</span>
                <div className="flex items-center space-x-1 cursor-pointer m-1 hover:text-white">
                    <FaUser />
                    <span>Login</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer m-1 hover:text-white">
                    <FaHeart />
                    <span>WishList</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer m-1 hover:text-white">
                    <FaCartPlus />
                    <span>Cart</span>
                </div>
            </div>

        </header>
    );
};

export default Header;

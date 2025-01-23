import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {/* Electronics Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">ELECTRONICS</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>Mobiles</li>
                            <li>Tablets</li>
                            <li>Laptops</li>
                            <li>Home Appliances</li>
                            <li>Camera, Photo & Video</li>
                            <li>Televisions</li>
                            <li>Headphones</li>
                            <li>Video Games</li>
                        </ul>
                    </div>

                    {/* Fashion Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">FASHION</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>Women's Fashion</li>
                            <li>Men's Fashion</li>
                            <li>Girls' Fashion</li>
                            <li>Boys' Fashion</li>
                            <li>Watches</li>
                            <li>Jewellery</li>
                            <li>Women's Handbags</li>
                            <li>Men's Eyewear</li>
                        </ul>
                    </div>

                    {/* Home and Kitchen Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">HOME AND KITCHEN</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>Bath</li>
                            <li>Home Decor</li>
                            <li>Kitchen & Dining</li>
                            <li>Tools & Home Improvement</li>
                            <li>Audio & Video</li>
                            <li>Furniture</li>
                            <li>Patio, Lawn & Garden</li>
                            <li>Pet Supplies</li>
                        </ul>
                    </div>

                    {/* Beauty Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">BEAUTY</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>Fragrance</li>
                            <li>Make-up</li>
                            <li>Haircare</li>
                            <li>Skincare</li>
                            <li>Bath & Body</li>
                            <li>Electronic Beauty Tools</li>
                            <li>Men's Grooming</li>
                            <li>Health Care Essentials</li>
                        </ul>
                    </div>

                    {/* Baby and Toys Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">BABY & TOYS</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>Diapering</li>
                            <li>Baby Transport</li>
                            <li>Nursing & Feeding</li>
                            <li>Baby & Kids Fashion</li>
                            <li>Baby & Toddler Toys</li>
                            <li>Tricycles & Scooters</li>
                            <li>Board Games & Cards</li>
                            <li>Outdoor Play</li>
                        </ul>
                    </div>

                    {/* Top Brands Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">TOP BRANDS</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>Pampers</li>
                            <li>Apple</li>
                            <li>Nike</li>
                            <li>Samsung</li>
                            <li>Tefal</li>
                            <li>L'Oréal Paris</li>
                            <li>Skechers</li>
                            <li>BLACK+DECKER</li>
                        </ul>
                    </div>
                </div>

                {/* App Store and Social Media Links */}
                <div className="mt-10 flex flex-col lg:flex-row lg:justify-between items-center">
                    {/* App Store Links */}
                    <div className="mb-6 lg:mb-0">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">SHOP ON THE GO</h4>
                        <div className="flex space-x-4">
                          
                        </div>
                    </div>
                    {/* Social Media Links */}
                    <div className="mr-52">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                            CONNECT WITH US
                        </h4>
                        <div className="flex text-3xl mr-3">
                            <div className="flex hover:text-amber-500 cursor-pointer"><FaFacebook /></div>
                            <div className="flex hover:text-amber-500 cursor-pointer"><FaInstagram /></div>
                            <div className="flex hover:text-amber-500 cursor-pointer"><FaTwitter /></div>
                            <div className="flex hover:text-amber-500 cursor-pointer"><FaLinkedin /></div>

                        </div>
                    </div>
                </div>

                {/* Footer Copy */}
                <div className="text-center mt-10 text-gray-600 text-sm">
                    © 2025 noon. All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Flyout = () => {
  const navigate = useNavigate()
  return (
    <div className="relative z-10">
      <div className="absolute left-1/2 z-10 flex w-screen max-w-max -translate-x-1/2 px-4">
        <div className="w-screen bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
          <div className="grid grid-cols-3 gap-8 p-6">
            {/* Column 1 */}
            <div>
              <h3 onClick={()=>{navigate('/mobileandaccesories')}} className="mb-4 text-lg font-semibold text-gray-900 cursor-pointer">
                Mobiles & Accessories
              </h3>
              <ul className="space-y-2">
                <li className="hover:text-indigo-600">iPhones</li>
                <li className="hover:text-indigo-600">Premium Android Phones</li>
                <li className="hover:text-indigo-600">Budget Smartphones</li>
                <li className="hover:text-indigo-600">Tablets</li>
                <li className="hover:text-indigo-600">Headsets & Speakers</li>
                <li className="hover:text-indigo-600">Wearables</li>
                <li className="hover:text-indigo-600">Power Banks</li>
                <li className="hover:text-indigo-600">Chargers</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Laptops & Accessories
              </h3>
              <ul className="space-y-2">
                <li className="hover:text-indigo-600">MacBooks</li>
                <li className="hover:text-indigo-600">Powerful Laptops</li>
                <li className="hover:text-indigo-600">Gaming Laptops</li>
                <li className="hover:text-indigo-600">Budget Laptops</li>
                <li className="hover:text-indigo-600">Monitors</li>
                <li className="hover:text-indigo-600">Printers</li>
                <li className="hover:text-indigo-600">Storage Devices</li>
                <li className="hover:text-indigo-600">Input Devices</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Gaming Essentials
              </h3>
              <ul className="space-y-2">
                <li className="hover:text-indigo-600">Gaming Consoles</li>
                <li className="hover:text-indigo-600">Gaming Accessories</li>
                <li className="hover:text-indigo-600">Video Games</li>
                <li className="hover:text-indigo-600">Gaming Monitors</li>
                <li className="hover:text-indigo-600">Digital Cards</li>
              </ul>
            </div>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 divide-x divide-gray-200 bg-gray-50">
            <a
              href="#"
              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
                  clipRule="evenodd"
                />
              </svg>
              Watch demo
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flyout;

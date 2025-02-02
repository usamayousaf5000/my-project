import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const SideBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedDeliveryMode, setSelectedDeliveryMode] = useState("");

  const dropdowns = [
    {
      title: "Delivery Mode",
      type: "radio",
      options: ["Supermall", "Express"],
    },
    {
      title: "Category",
      options: ["Electronics & Mobiles"],
    },
    {
      title: "Brand",
      type: "checkbox",
      search: true, 
      options: [
        { name: "Samsung"},
        { name: "Apple"},
        { name: "OnePlus"},
        { name: "Xiaomi"},
        { name: "Motorola"},
        { name: "HUAWEI"},
        { name: "Honor"},
      ],
    },
    {
      title: "Price (AED)",
      options: ["Below 100 AED", "100-500 AED", "Above 500 AED"],
    },
    {
      title: "Deals",
      options: ["Buy One Get One", "Discount Offers"],
    },
    {
      title: "Product Rating",
      options: ["4 Stars & Above", "3 Stars & Above"],
    },
    {
      title: "New Arrivals",
      options: ["This Week", "This Month"],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="w-80 h-screen bg-white border-none p-4 rounded relative">
      {dropdowns.map((dropdown, index) => (
        <div key={index} className="mb-4">
          {/* Dropdown Title */}
          <div
            onClick={() => toggleDropdown(index)}
            className="flex justify-between items-center cursor-pointer text-gray-700 font-medium"
          >
            {dropdown.title}
            <span
              className={`text-gray-400 transform transition-transform duration-500 text-xl ${
                openDropdown === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaAngleUp/>
            </span>
          </div>

          {/* Dropdown Content */}
          {openDropdown === index && (
            <div className="mt-2 pl-4">
              {/* Render Radio Buttons for Delivery Mode */}
              {dropdown.type === "radio" &&
                dropdown.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center mb-2">
                    <input
                      type="radio"
                      id={`${dropdown.title}-${optionIndex}`}
                      name={dropdown.title}
                      value={option}
                      checked={selectedDeliveryMode === option}
                      onChange={(e) => setSelectedDeliveryMode(e.target.value)}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`${dropdown.title}-${optionIndex}`}
                      className="text-gray-700 bg-yellow-300 px-2 py-1 rounded-lg font-medium hover:bg-yellow-400 cursor-pointer"
                    >
                      {option.toLowerCase() === "supermall" ? (
                        <span className="text-blue-700">{option}</span>
                      ) : (
                        <span>{option}</span>
                      )}
                    </label>
                  </div>
                ))}

              {/* Render Plain Text for Category */}
              {dropdown.type !== "radio" && !dropdown.search && (
                <div>
                  {dropdown.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="text-gray-700">
                      + {option}
                    </div>
                  ))}
                </div>
              )}

              {/* Render Checkbox with Search for Brand */}
              {dropdown.type === "checkbox" && dropdown.search && (
                <>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                  />
                  <div>
                    {dropdown.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="flex justify-between items-center mb-2"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`brand-${optionIndex}`}
                            value={option.name}
                            className="mr-2"
                          />
                          <label
                            htmlFor={`brand-${optionIndex}`}
                            className="text-gray-700"
                          >
                            {option.name}
                          </label>
                        </div>
                        <span className="text-gray-400">{option.count}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;

import React from "react";
import { useNavigate } from "react-router-dom";

const MenFashion = () => {
    const navigate = useNavigate();
  const items = [
    { title: "Hoodies & sweatshirts", img: "src/assets/images/p1.jpg" },
    { title: "Sweaters & cardigans", img: "src/assets/images/A1.jpg" },
    { title: "Footwear", img: "src/assets/images/A5.jpg" },
    { title: "Handbags", img: "src/assets/images/A2.jpg" },
    { title: "Jackets", img: "src/assets/images/p2.jpg" },
    { title: "Tops", img: "src/assets/images/A3.jpg" },
  ];

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Men's fashion</h2>
          <button
            onClick={() => navigate('/Seeall')}
            className="px-4 py-2 border border-gray-400 bg-white text-gray-800 font-medium hover:bg-black hover:text-white"
          >
            View All
          </button>
        </div>
        
        <div className="flex justify-between gap-2">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-44 h-44 object-cover rounded-2xl mx-auto"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-700 mt-3">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenFashion;

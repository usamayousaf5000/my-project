import React from "react";

export default function Categories() {
  return (
    <div className="block mx-auto p-4 ">
      {/* More Reasons to Shop */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">More reasons to shop</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 border rounded-lg text-center bg-white shadow-md">
            <img src="src/assets/images/image2.jpg" alt="Top-rated products" className="mx-auto mb-3 w-48 h-48 object-contain" />
            <h3 className="font-semibold text-lg ">Top-rated products</h3>
            <p className="text-sm text-gray-600">Get the best at the best prices</p>
          </div>
          <div className="p-4 border rounded-lg text-center bg-white shadow-md">
            <img src="src/assets/images/image3.jpg" alt="Bestsellers" className="mx-auto mb-3 w-48 h-48 object-contain" />
            <h3 className="font-semibold text-lg mb-1">Bestsellers</h3>
            <p className="text-sm text-gray-600">Most popular picks</p>
          </div>
          <div className="p-4 border rounded-lg text-center bg-white shadow-md">
            <img src="src/assets/images/image4.jpg" alt="New arrivals" className="mx-auto mb-3 w-48 h-48 object-contain" />
            <h3 className="font-semibold text-lg mb-1">New arrivals</h3>
            <p className="text-sm text-gray-600">Stay up to date</p>
          </div>
          <div className="p-4 border rounded-lg text-center bg-white shadow-md">
            <img src="src/assets/images/image5.jpg" alt="Mahali" className="mx-auto mb-3 w-48 h-48 object-contain" />
            <h3 className="font-semibold text-lg mb-1">Mahali</h3>
            <p className="text-sm text-gray-600">Support local businesses</p>
          </div>
        </div>
      </div>

      {/* Mega Deals */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Mega deals</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 border rounded-lg bg-white shadow-md">
            <h3 className="font-semibold text-yellow-500 mb-2">Smartphones deals</h3>
            <img src="src/assets/images/image2.jpg" alt="Smartphones deals" className="mx-auto mb-3 w-48 h-48 object-contain" />
            <p className="text-sm text-gray-400 line-through">4949 AED</p>
            <p className="text-xl font-bold">2939 AED</p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-md">
            <h3 className="font-semibold text-yellow-500 mb-2">Power & Hand Tools deals</h3>
            <img src="src/assets/images/image3.jpg" alt="Power tools" className="mx-auto mb-3 w-48 h-48 object-contain" />
            <p className="text-sm text-gray-400 line-through">368 AED</p>
            <p className="text-xl font-bold">163 AED</p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-md">
            <h3 className="font-semibold text-yellow-500 mb-2">Bathing & Baby Care deals</h3>
            <img src="src/assets/images/image4.jpg" alt="Baby care" className="mx-auto mb-3 w-48 h-48 object-contain" />
            <p className="text-sm text-gray-400 line-through">220 AED</p>
            <p className="text-xl font-bold">75 AED</p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-md">
            <h3 className="font-semibold text-yellow-500 mb-2">Wearables deals</h3>
            <img src="src/assets/images/image5.jpg" alt="Wearables" className="mx-auto mb-3 w-48 h-48 object-contain" />
            <p className="text-sm text-gray-400 line-through">3199 AED</p>
            <p className="text-xl font-bold">2299 AED</p>
          </div>
        </div>
      </div>

      {/* In Focus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg bg-white shadow-md">
          <h2 className="text-xl font-bold mb-3">Elevate your style</h2>
          <p className="text-sm text-gray-600">
            Explore the right tools for your daily routine
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-white shadow-md">
          <h2 className="text-xl font-bold mb-3">Enter a gaming universe</h2>
          <p className="text-sm text-gray-600">
            Shop consoles, accessories & more
          </p>
        </div>
      </div>
    </div>
  );
}

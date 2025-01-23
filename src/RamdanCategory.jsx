import React from 'react';

function RamadanCategory() {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">Ramadan Essentials</h2>
      <div className="grid grid-cols-7 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Abayas & Jalabiyas</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Arabic Sandals</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Shemaghs</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Home Decor</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Home Entertainment</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Card & Board Games</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Ramadan Celebrations</p>
        </div>
      </div>
    </div>
  );
}

export default RamadanCategory;
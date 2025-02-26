import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./Products";

const ItemDetails = () => {
  const { id } = useParams();

  // Find the item inside all products
  let selectedItem = null;
  products.forEach((product) => {
    product.items.forEach((item) => {
      if (item.id === parseInt(id)) {
        selectedItem = item;
      }
    });
  });

  if (!selectedItem) {
    return <h2 className="text-center text-2xl font-bold mt-10">Item Not Found</h2>;
  }

  return (
    <section className="mt-10 lg:px-20 px-4 md:px-10 roboto-flex">
      {/* Back Button */}
      <Link
        to="/"
        className="mb-4 inline-block px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition duration-300"
      >
        ← Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Images */}
        <div>
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="w-full h-96 object-cover rounded-md"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {selectedItem.extraImages?.map((img, index) => (
              <img key={index} src={img} alt="" className="w-full h-24 object-cover rounded-md" />
            ))}
          </div>
        </div>

        {/* Right Section - Details */}
        <div>
          <h2 className="text-3xl font-bold">{selectedItem.name}</h2>
          <p className="text-xl text-gray-700">${selectedItem.price}</p>
          <p className="mt-2 text-gray-600">{selectedItem.description}</p>

          {/* Ring Size Dropdown */}
          <label className="block mt-4 font-semibold">Ring Size</label>
          <select className="w-full p-2 border rounded-md">
            <option>Select Size</option>
            {["Small", "Medium", "Large"].map((size, index) => (
              <option key={index}>{size}</option>
            ))}
          </select>

          {/* Finishing Options */}
          <div className="mt-4">
            <span className="font-semibold">Finishing: </span>
            {["Shiny", "Matte", "Glossy"].map((finish, index) => (
              <button
                key={index}
                className="px-3 py-1 border rounded-md mr-2 hover:bg-gray-200"
              >
                {finish}
              </button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-2xl font-semibold">Detailed Information</h3>
        <p className="mt-2 text-gray-700">{selectedItem.details}</p>
      </div>
    </section>
  );
};

export default ItemDetails;

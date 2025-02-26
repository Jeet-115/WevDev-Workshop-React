import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "./Products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-2xl font-bold mt-10">Product Not Found</h2>;
  }

  return (
    <section className="pt-10 lg:px-20 px-4 md:px-10 roboto-flex min-h-screen bg-gradient-to-b from-[#a5cfde] to-[#52bcdf]">
      {/* Back Button */}
      <Link
        to="/"
        className="mb-4 inline-block px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition duration-300"
      >
        ← Back to Home
      </Link>

      {/* Product Heading */}
      <motion.h2
        className="text-3xl font-bold roboto-flex mb-6 pl-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {product.heading}
      </motion.h2>

      {/* Product Items Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {product.items.map((item, index) => (
          <Link to={`/item/${item.id}`} key={index}>
            <motion.div
              className="bg-white p-4 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
              <p className="text-lg font-semibold mt-2">{item.name}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;

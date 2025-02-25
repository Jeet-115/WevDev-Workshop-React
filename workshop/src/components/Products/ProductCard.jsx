import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      className="bg-gray-100 text-black p-4 rounded-lg shadow-xl h-[350px] montserrat transition-transform duration-300 ease-in-out hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
    </motion.div>
  );
};

export default ProductCard;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      className="bg-gray-100 lg:h-[550px] md:h-[600px] h-[550px] text-black p-6 rounded-lg shadow-xl montserrat transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.1 }}
      onClick={handleClick} // Navigate on click
    >
      <h2 className="lg:text-2xl md:text-lg text-[16px] font-bold mb-4 text-left">
        {product.heading}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {product.items.slice(0, 4).map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="lg:text-lg md:text-[16px] text-sm font-semibold mt-2">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductCard;

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import products from "./Products";

const ProductCatalog = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="product-catalog"
      className="mt-10 lg:px-20 px-4 md:px-10 roboto-flex"
    >
      <motion.h2
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="text-3xl font-bold roboto-flex mb-6 pl-4"
      >
        Our Products Variety
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10">
        {products.map((product, index) => (
          <div key={product.id} className="text-black p-4 rounded-lg">
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;

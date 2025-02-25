import React from "react";
import ProductCard from "./ProductCard";
import products from "./Products";

const ProductCatalog = () => {
  return (
    <section id="product-catalog" className="mt-10 lg:px-20 px-4 md:px-10 roboto-flex">
      <h2 className="text-3xl font-bold roboto-flex mb-6 pl-4">Product Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6">
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

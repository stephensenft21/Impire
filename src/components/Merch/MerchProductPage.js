import React, { useEffect } from "react";
import { useMerchContext } from "../context/MerchProvider";

const MerchProductsPage = () => {
  const { merch, fetchMerch } = useMerchContext();

  useEffect(() => {
    fetchMerch();
  }, [fetchMerch]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Merch Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {merch.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchProductsPage;

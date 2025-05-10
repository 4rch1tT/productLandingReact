import React from "react";

const Product = (props) => {
  return (
    <>
      <div className="card bg-base-100 w-74 shadow-sm h-full flex flex-col">
        <figure className="px-10 pt-10 h-48 flex items-center justify-center">
          <img
            src={props.productData.image}
            className="rounded-lg object-contain h-full"
            alt="Product"
          />
        </figure>
        <div className="card-body flex-grow flex flex-col justify-between">
          <div>
            <h2 className="card-title text-orange-400 hover:text-orange-500 transition duration-300">
              {props.productData.title}
            </h2>
            <p className="text-orange-200">{props.productData.description}</p>
          </div>
          <div className="mt-4">
            <p className="text-orange-200">{props.productData.rating.rate}/5</p>
            <p className="text-orange-200 text-xl">
              ${props.productData.price}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-orange-400 text-black hover:bg-orange-500 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

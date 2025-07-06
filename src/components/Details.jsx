import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Details = () => {
  return (
    <>
      <Nav />
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <img
          className="object-contain h-[50%] w-[28%]"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Bag"
        />
        <div className="text-[#061D4B] h-[44%] w-[30%] mt-[52px]">
          <h1 className="text-3xl -mb-2">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <h3 className="text-zinc-400 my-3">Category : Fashion Bags</h3>
          <p className="text-red-400 mb-2 text-xl font-semibold">
            Price :₹109.95
          </p>
          <p className="wrap-break-word mb-5">
            <strong>Description :</strong> Your perfect pack for everyday use
            and walks in the forest. Stash your laptop (up to 15 inches) in the
            padded sleeve, your everyday
          </p>
          <div className="flex gap-4">
            <Link className="py-2 min-w-[6vw] max-w-[6vw] border-2 border-[#2563EB] hover:border-transparent text-[#2563EB] hover:text-white hover:bg-[#2563EB] rounded-xl text-md font-bold flex items-center justify-center transform transition-transform duration-800 ease-in-out hover:scale-110">
              Edit
            </Link>
            <Link className="py-2 min-w-[6vw] max-w-[6vw] border-2 border-red-600 hover:border-transparent text-red-600 hover:text-white hover:bg-red-600 rounded-xl text-md font-bold flex items-center justify-center transform transition-transform duration-800 ease-in-out hover:scale-110">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

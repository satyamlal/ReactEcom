import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Details = () => {
  return (
    <>
      <Nav />
      <div className="w-full h-screen flex items-center justify-center bg-[#3B4254]">
        <img
          className="object-contain h-[50%] w-[28%]"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Bag"
        />
        <div className="text-white w-[30%]">
          <h3 className="text-zinc-400">Category : Fashion Bags</h3>
          <h1 className="text-3xl">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <p>
            <strong>Price :</strong> ₹109.95
          </p>
          <p className="wrap-break-word">
            <strong>Description :</strong> Your perfect pack for everyday use
            and walks in the forest. Stash your laptop (up to 15 inches) in the
            padded sleeve, your everyday
          </p>
          <Link>Edit</Link>
          <Link>Delete</Link>
        </div>
      </div>
    </>
  );
};

export default Details;

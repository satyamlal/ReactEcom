import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";
import axios from "../utils/axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  });

  return product ? (
    <div className="flex flex-col h-screen pt-[55px]">
      <div className="flex flex-1">
        <Nav />
        <div className="pt-topbar w-full h-screen flex items-center justify-center bg-white">
          <img
            className="object-contain h-[50%] w-[28%]"
            src={product.image}
            alt="Bag"
          />
          <div className="text-[#061D4B] h-[44%] w-[30%] mt-[52px] ml-[32px]">
            <h1 className="text-3xl -mb-2">{product.title}</h1>
            <h3 className="text-zinc-400 my-3">
              Category : {product.category}
            </h3>
            <p className="text-red-400 mb-2 text-xl font-semibold">
              <strong>Price : </strong>₹{product.price}
            </p>
            <p className="wrap-break-word mb-5">
              <strong>Description : </strong>
              {product.description}
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
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;

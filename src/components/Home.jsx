import Nav from "../components/Nav";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/ProductContext";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  // const category = decodeURIComponent(search.split("=")[1]);
  const category = query.get("category");

  const [filteredProducts, setfilteredProducts] = useState([]);

  const getProductsCategory = async () => {
    try {
      const { data } = await axios.get(`products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category) {
      getProductsCategory();
    } else if (products) {
      setfilteredProducts(products);
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className="h-full w-[100%] pt-[40px] pl-[30px] text-white bg-white overflow-x-hidden overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="flex flex-wrap">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/details/${product.id}`}
                className="card w-[16%] h-[32vh] p-4 border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8"
              >
                <div
                  className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                ></div>
                <h1 className="text-[#333748]">{product.title}</h1>
              </Link>
            ))}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;

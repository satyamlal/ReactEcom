import Nav from "../components/Nav";
import TopBar from "../components/TopBar";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/ProductContext";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
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

  if (!products) return <Loading />;

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Nav />
        <main className="flex-1 bg-white p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Dashboard</h2>
          <div className="flex flex-wrap">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/details/${product.id}`}
                className="card w-[16%] h-[32vh] p-4 border border-gray-200 hover:shadow-lg rounded flex flex-col justify-center items-center hover:scale-105 transition duration-200 mr-6 mb-8"
              >
                <div
                  className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <h1 className="text-gray-800 text-center">{product.title}</h1>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

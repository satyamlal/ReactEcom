import Nav from "../components/Nav";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(ProductContext);

  return products ? (
    <>
      <Nav />
      <div className="h-full w-[100%] pt-[40px] pl-[30px] text-white bg-white overflow-x-hidden overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="flex flex-wrap">
          {products.map((product, index) => (
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

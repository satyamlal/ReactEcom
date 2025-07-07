import Nav from "../components/Nav";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(ProductContext);
  console.log(products);

  return products ? (
    <>
      <Nav />
      <div className="h-full w-[100%] pt-[40px] pl-[30px] text-white bg-white overflow-x-hidden overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="flex flex-wrap">
          <Link
            to="/details/1"
            className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8"
          >
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>

          <Link className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#ECF2FD] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-[#333748]">Product Title</h1>
          </Link>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;

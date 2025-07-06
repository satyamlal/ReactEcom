import React from "react";

const Home = () => {
  return (
    <>
      <nav className="w-[18%] h-full bg-[#333748] p-10 flex flex-col items-center">
        <a
          className="px-4 py-4 font-semibold text-white 
                      border-2 border-zinc-400 
                      bg-zinc-600 
                      hover:bg-blue-600 hover:text-white 
                      hover:border-transparent
                      rounded-lg transition"
          onClick={() => {
            console.log("Add New Product clicked");
          }}
        >
          Add New Product
        </a>

        <hr className="my-5 w-[120%] border-white border-1 opacity-50" />
        <h1 className="w-[80%] text-white text-2xl font-semibold mb-2">
          Categories Filter
        </h1>
        <ul className="w-full px-2 text-white">
          <li className="group p-3 mb-3 flex items-center text-white hover:font-bold bg-[#1258E2] hover:bg-blue-600 rounded cursor-pointer">
            <span className="inline-block w-[15px] h-[15px] mr-2 rounded-full border border-white group-hover:bg-white group-hover:border-white" />
            Category 1
          </li>
          <li className="group p-3 mb-3 flex items-center text-white hover:font-bold bg-[#1258E2] hover:bg-blue-600 rounded cursor-pointer">
            <span className="inline-block w-[15px] h-[15px] mr-2 rounded-full border border-white group-hover:bg-white group-hover:border-white" />
            Category 2
          </li>
          <li className="group p-3 mb-3 flex items-center text-white hover:font-bold bg-[#1258E2] hover:bg-blue-600 rounded cursor-pointer">
            <span className="inline-block w-[15px] h-[15px] mr-2 rounded-full border border-white group-hover:bg-white group-hover:border-white" />
            Category 3
          </li>
        </ul>
      </nav>

      <div className="h-full w-[82%] pt-[40px] pl-[30px] text-white bg-[#3B4254] overflow-x-hidden overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="flex flex-wrap">
          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>

          <div className="card w-[16%] h-[32vh] border hover:shadow-lg hover:shadow-[#4C526B] rounded flex flex-col justify-center items-center hover:scale-105 transition ease-in-out duration-400 mr-6 mb-8">
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="text-white">Product Title</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

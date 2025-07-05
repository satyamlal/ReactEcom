import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <nav className="w-[18%] h-full bg-[#333748] p-10 flex flex-col items-center">
        <a
          className="px-4 py-2 font-semibold text-white 
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

      <main className="flex-1 text-white bg-[#3B4254] p-8">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Select a category or click "Add New Product" to get started.</p>
      </main>
    </div>
  );
};

export default App;

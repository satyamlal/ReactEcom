import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <nav className="w-[15%] h-full bg-zinc-100 p-10 flex flex-col items-center">
        <a
          className="px-4 py-2 bg-blue-300 font-semibold rounded-lg hover:bg-blue-400 transition text-black"
          onClick={() => {
            console.log("Add New Product clicked");
          }}
          href="/create"
        >
          Add New Product
        </a>

        <hr className="my-5 w-[100%] border-black opacity-50" />
        <h1 className="text-white text-lg font-semibold mb-2">Categories</h1>
        <ul className="w-full px-4 text-white">
          <li className="py-2 hover:bg-red-600 rounded cursor-pointer">
            Category 1
          </li>
          <li className="py-2 hover:bg-red-600 rounded cursor-pointer">
            Category 2
          </li>
          <li className="py-2 hover:bg-red-600 rounded cursor-pointer">
            Category 3
          </li>
        </ul>
      </nav>

      <main className="flex-1 bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Select a category or click "Add New Product" to get started.</p>
      </main>
    </div>
  );
};

export default App;

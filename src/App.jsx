import React from "react";
import "./index.css"; // Import Tailwind base styles

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* Sidebar */}
      <nav className="w-1/5 h-full bg-red-500 flex flex-col items-center py-6">
        <button
          className="mb-4 px-4 py-2 bg-white text-red-500 font-semibold rounded-lg hover:bg-gray-100 transition"
          onClick={() => {
            // TODO: Replace with real add-product logic
            console.log("Add New Product clicked");
          }}
        >
          Add New Product
        </button>

        <hr className="my-3 w-3/4 border-white opacity-50" />
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

      {/* Main Content */}
      <main className="flex-1 bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Select a category or click "Add New Product" to get started.</p>
      </main>
    </div>
  );
};

export default App;

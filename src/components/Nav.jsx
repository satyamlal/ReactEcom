import { useContext } from "react";
import { ProductContext } from "../utils/ProductContext";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinctCategory = products
    ? [...new Set(products.map((item) => item.category).filter(Boolean))]
    : [];

  distinctCategory = [...new Set(distinctCategory)];

  const titleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <nav className="min-w-[16%] h-full bg-[#333748] p-10 flex flex-col items-center">
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
          Categories
        </h1>
        <ul className="w-full px-2 text-white">
          {distinctCategory.map((category, index) => (
            <Link to={`/?category=${category}`} key={index}>
              <li className="group p-3 mb-3 w-[100%] h-[24%] text-md flex items-center text-white hover:font-bold bg-[#1258E2] hover:bg-blue-600 rounded cursor-pointer">
                <span className="inline-block w-[15px] h-[15px] mr-2 rounded-full border border-white group-hover:bg-white group-hover:border-white" />
                {titleCase(category)}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;

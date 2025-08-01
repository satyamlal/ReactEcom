import "./index.css";
import { Route, Routes } from "react-router-dom";
import TopBar from "../src/components/TopBar";
import Home from "./components/Home";
import Details from "./components/Details";

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;

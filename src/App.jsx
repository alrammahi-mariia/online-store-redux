import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import List from "./components/List";
import StoreNavbar from "./components/StoreNavbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <StoreNavbar />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import "./App.css";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { BrowserRouter } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";
import NavTop from "./components/Navbar";
import { ShopContextProvider } from "./context/ShopContext";
function App() {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
function App() {
  return (
   
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
     
  );
}

export default App;

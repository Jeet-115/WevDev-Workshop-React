import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./screens/Home";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./screens/Login";
import Signup from "./screens/SignUp";
import ProductDetails from "./components/Products/ProductDetails";
import ItemDetails from "./components/Products/ItemDetails";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/item/:id" element={<ItemDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

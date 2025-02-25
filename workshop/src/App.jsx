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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./screens/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

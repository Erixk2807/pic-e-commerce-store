import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Footer from "./components/footer";
import Place from "./components/place";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/metabnb" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

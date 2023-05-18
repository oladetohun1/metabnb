import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Footer from "./components/footer";
import Place from "./components/place";
import Nft from "./components/NFT";
import Adventure from "./components/adventure";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<Place />} />
          <Route path="/nft" element={<Nft />} />
          <Route path="/adventure" element={<Adventure />} />
        </Routes>
      <Footer />

    </div>
  );
}

export default App;

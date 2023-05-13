import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Footer from './components/footer';
import Place from './components/place';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/place" element={<Place/>} />
      </Routes>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
